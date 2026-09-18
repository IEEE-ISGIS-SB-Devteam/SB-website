import { NextRequest, NextResponse } from "next/server";

type ContactPayload = {
  name: string;
  email: string;
  subject: string;
  message: string;
  company?: string; // honeypot — real users never fill this
};

const MAX_LENGTHS = { name: 100, email: 150, subject: 150, message: 3000 };
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Simple in-memory rate limit — fine for a small student-branch site.
// Resets on server restart / serverless cold start, an acceptable tradeoff here.
const submissions = new Map<string, number[]>();
const WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_PER_WINDOW = 5;

function isRateLimited(ip: string) {
  const now = Date.now();
  const timestamps = (submissions.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  timestamps.push(now);
  submissions.set(ip, timestamps);
  return timestamps.length > MAX_PER_WINDOW;
}

function validate(body: Partial<ContactPayload>) {
  const errors: string[] = [];
  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const subject = (body.subject ?? "").trim();
  const message = (body.message ?? "").trim();

  if (!name) errors.push("Name is required.");
  if (name.length > MAX_LENGTHS.name) errors.push("Name is too long.");
  if (!email) errors.push("Email is required.");
  else if (!EMAIL_REGEX.test(email)) errors.push("Email is invalid.");
  if (email.length > MAX_LENGTHS.email) errors.push("Email is too long.");
  if (!subject) errors.push("Subject is required.");
  if (subject.length > MAX_LENGTHS.subject) errors.push("Subject is too long.");
  if (!message) errors.push("Message is required.");
  if (message.length > MAX_LENGTHS.message) errors.push("Message is too long.");

  return { errors, clean: { name, email, subject, message } };
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many submissions. Please try again later." },
      { status: 429 },
    );
  }

  let body: Partial<ContactPayload>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  // Honeypot — bots fill every field; real users never see this one.
  if (body.company) {
    return NextResponse.json({ ok: true }); // pretend success, drop silently
  }

  const { errors, clean } = validate(body);
  if (errors.length > 0) {
    return NextResponse.json({ error: errors[0] }, { status: 400 });
  }

  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
  if (!webhookUrl) {
    console.error("CONTACT_WEBHOOK_URL is not set — contact form cannot deliver messages.");
    return NextResponse.json(
      { error: "Contact form is not configured yet. Please email us directly." },
      { status: 500 },
    );
  }

  try {
    const forward = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(clean),
    });
    if (!forward.ok) throw new Error(`Webhook responded with ${forward.status}`);
  } catch (err) {
    console.error("Failed to forward contact submission:", err);
    return NextResponse.json(
      { error: "Something went wrong sending your message. Please try again." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}