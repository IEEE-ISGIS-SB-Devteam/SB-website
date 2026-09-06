"use client";

import { FormEvent, useState } from "react";

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initialValues: FormValues = { name: "", email: "", subject: "", message: "" };

export default function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({});
  const [confirmation, setConfirmation] = useState("");

  const validateField = (field: keyof FormValues, value: string) => {
    if (!value.trim()) return `${field[0].toUpperCase()}${field.slice(1)} is required.`;
    if (field === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
      return "Enter a valid email address.";
    }
    return "";
  };

  const handleChange = (field: keyof FormValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    if (errors[field]) {
      setErrors((current) => ({ ...current, [field]: validateField(field, value) }));
    }
    setConfirmation("");
  };

  const handleBlur = (field: keyof FormValues) => {
    setErrors((current) => ({ ...current, [field]: validateField(field, values[field]) }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = Object.fromEntries(
      (Object.keys(values) as Array<keyof FormValues>)
        .map((field) => [field, validateField(field, values[field])])
        .filter(([, error]) => error),
    ) as Partial<Record<keyof FormValues, string>>;

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const body = `Name: ${values.name}\nEmail: ${values.email}\n\n${values.message}`;
    const mailto = `mailto:sb-isgis@ieee.org?subject=${encodeURIComponent(values.subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setConfirmation("Opening your email client...");
  };

  const fieldError = (field: keyof FormValues) => errors[field];

  return (
    <section className="contact-card relative overflow-hidden rounded-3xl p-6 shadow-(--shadow-md) sm:p-10 lg:p-12" aria-labelledby="message-heading">
      <div className="pointer-events-none absolute inset-0 opacity-75" style={{ backgroundImage: "linear-gradient(to right, color-mix(in srgb, var(--foreground) 13%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in srgb, var(--foreground) 13%, transparent) 1px, transparent 1px)", backgroundSize: "34px 34px" }} aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
        {[[2, 2], [9, 5], [5, 9], [12, 12]].map(([column, row]) => (
          <div key={`${column}-${row}`} className="absolute h-[34px] w-[34px] rounded-lg" style={{ left: `${column * 34}px`, top: `${row * 34}px`, backgroundColor: "color-mix(in srgb, var(--foreground) 10%, transparent)", boxShadow: "inset 0 0 14px color-mix(in srgb, var(--foreground) 16%, transparent)" }} />
        ))}
      </div>
      <div className="relative z-10">
        <h2 id="message-heading" className="font-open-sans text-2xl font-bold sm:text-3xl">Send us a message</h2>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit} noValidate>
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-semibold">Full name</label>
            <input type="text" id="name" name="name" value={values.name} onChange={(event) => handleChange("name", event.target.value)} onBlur={() => handleBlur("name")} aria-invalid={Boolean(fieldError("name"))} aria-describedby={fieldError("name") ? "name-error" : undefined} autoComplete="name" placeholder="John Doe" className="theme-input w-full rounded-xl border px-4 py-3.5 placeholder:text-(--text-muted) focus:outline-none focus:ring-2 focus:ring-(--ieee-blue)" />
            {fieldError("name") && <p id="name-error" className="mt-1 text-sm text-red-600 dark:text-red-400">{fieldError("name")}</p>}
          </div>
          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-semibold">Email Address</label>
            <input type="email" id="email" name="email" value={values.email} onChange={(event) => handleChange("email", event.target.value)} onBlur={() => handleBlur("email")} aria-invalid={Boolean(fieldError("email"))} aria-describedby={fieldError("email") ? "email-error" : undefined} autoComplete="email" placeholder="john@university.tn" className="theme-input w-full rounded-xl border px-4 py-3.5 placeholder:text-(--text-muted) focus:outline-none focus:ring-2 focus:ring-(--ieee-blue)" />
            {fieldError("email") && <p id="email-error" className="mt-1 text-sm text-red-600 dark:text-red-400">{fieldError("email")}</p>}
          </div>
          <div>
            <label htmlFor="subject" className="mb-2 block text-sm font-semibold">Subject</label>
            <input type="text" id="subject" name="subject" value={values.subject} onChange={(event) => handleChange("subject", event.target.value)} onBlur={() => handleBlur("subject")} aria-invalid={Boolean(fieldError("subject"))} aria-describedby={fieldError("subject") ? "subject-error" : undefined} placeholder="How can we help?" className="theme-input w-full rounded-xl border px-4 py-3.5 placeholder:text-(--text-muted) focus:outline-none focus:ring-2 focus:ring-(--ieee-blue)" />
            {fieldError("subject") && <p id="subject-error" className="mt-1 text-sm text-red-600 dark:text-red-400">{fieldError("subject")}</p>}
          </div>
          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-semibold">Message</label>
            <textarea id="message" name="message" value={values.message} onChange={(event) => handleChange("message", event.target.value)} onBlur={() => handleBlur("message")} aria-invalid={Boolean(fieldError("message"))} aria-describedby={fieldError("message") ? "message-error" : undefined} rows={5} placeholder="Type your message here" className="theme-input min-h-[130px] w-full resize-y rounded-xl border px-4 py-3.5 placeholder:text-(--text-muted) focus:outline-none focus:ring-2 focus:ring-(--ieee-blue)" />
            {fieldError("message") && <p id="message-error" className="mt-1 text-sm text-red-600 dark:text-red-400">{fieldError("message")}</p>}
          </div>
          <button type="submit" className="bg-(--foreground) px-6 py-3 font-semibold text-(--background) transition hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-(--ieee-blue) focus:ring-offset-2 focus:ring-offset-(--background)">Send message</button>
          {confirmation && <p role="status" className="text-sm font-semibold text-(--ieee-blue)">{confirmation}</p>}
        </form>
      </div>
    </section>
  );
}
