// src/components/Contact/Contact.tsx
import { useInView } from 'framer-motion';
const SERVICE_ID   = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID  = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const USER_ID      = import.meta.env.VITE_EMAILJS_USER_ID;
import { useRef, useState, ChangeEvent, useEffect } from 'react';
import emailjs from 'emailjs-com';
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Linkedin,
  Instagram,
} from 'lucide-react';
import './contact.css';

export const Contact = () => {
  const ref = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const isInView = useInView(ref, { once: true });

  // form state + errors + success message
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });
  const [errors, setErrors] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });
  const [successMsg, setSuccessMsg] = useState('');
  
  useEffect(() => {
    if (!successMsg) return;
    const timer = setTimeout(() => {
      setSuccessMsg('');
    }, 5000);          // ← adjust delay here (5000ms = 5s)

  return () => clearTimeout(timer);
}, [successMsg]);

  // simple email regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((fd) => ({ ...fd, [name]: value }));
    // clear error as user types
    setErrors((er) => ({ ...er, [name]: '' }));
    setSuccessMsg('');
  };

  const validate = () => {
    const newErrors = { user_name: '', user_email: '', message: '' };
    if (!formData.user_name.trim()) newErrors.user_name = 'Name is required.';
    if (!formData.user_email.trim()) {
      newErrors.user_email = 'Email is required.';
    } else if (!emailRegex.test(formData.user_email)) {
      newErrors.user_email = 'Please enter a valid email.';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required.';
    setErrors(newErrors);
    // any non‐empty string means error
    return !Object.values(newErrors).some((msg) => msg);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate() || !formRef.current) return;

    emailjs
    .sendForm(
      SERVICE_ID,
      TEMPLATE_ID,
      formRef.current!,
      USER_ID
    )
      .then(
        () => {
          setSuccessMsg('✅ Your message was sent successfully!');
          setFormData({ user_name: '', user_email: '', message: '' });
        },
        (err) => {
          console.error('EmailJS error:', err);
          setSuccessMsg('❌ Oops, something went wrong. Please try again later.');
        }
      );
  };

  return (
    <section id="contact" className="contact" ref={ref}>
      <div
        className="container"
        style={{
          transform: isInView ? 'none' : 'translateY(100%)',
          opacity: isInView ? 1 : 0,
          transition: 'all 0.5s ease-out 0.2s',
        }}
      >
        <div className="blog__top-content">
          <h6 className="subtitle">Get in Touch</h6>
          <h2>
            Contact <span className="highlight">Us</span>
          </h2>
        </div>

        <div className="contact__wrapper">
          {/* ← INFO PANEL (left, gradient bg) */}
          <div className="contact__info-panel">
            {/* Map */}
            <div className="contact__map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3274.6762200798744!2d10.757233999999997!3d34.8392324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1301d19db21e2b53%3A0x771c533873752407!2sHigher%20Institute%20of%20Computer%20Science%20and%20Multimedia%20of%20Sfax!5e0!3m2!1sen!2stn!4v1743360052827!5m2!1sen!2stn"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Higher Institute of Computer Science and Multimedia of Sfax"
              />
            </div>

            {/* Contact details */}
            <div className="contact__details-inner">
              <div className="contact__item">
                <div className="contact__icon"><MapPin size={20} /></div>
                <div className="contact__text">
                  <h4>Address</h4>
                  <p>RQQ4+MVX، pôle technologique de sfax, Sakiet Ezzit 3021</p>
                </div>
              </div>
              <div className="contact__item">
                <div className="contact__icon"><Phone size={20} /></div>
                <div className="contact__text">
                  <h4>Phone (Webmaster)</h4>
                  <p>+216 26 552 952</p>
                </div>
              </div>
              <div className="contact__item">
                <div className="contact__icon"><Mail size={20} /></div>
                <div className="contact__text">
                  <h4>Email</h4>
                  <p>smc-isims@ieee.tn</p>
                </div>
              </div>

              <div className="contact__social">
                <a href="https://www.facebook.com/people/IEEE-SMC-ISIMS-SB-Chapter/61557150934003/" aria-label="Facebook"><Facebook size={18} /></a>
                <a href="https://tn.linkedin.com/company/ieee-smc-chapter-isims-student-branch?trk=public_post_feed-actor-name" aria-label="LinkedIn"><Linkedin size={18} /></a>
                <a href="https://www.instagram.com/ieee_smc_isims_sb_chapter/" aria-label="Instagram"><Instagram size={18} /></a>
              </div>
            </div>
          </div>

          {/* ← FORM (right) */}
          <div className="contact__form">
            <form ref={formRef} onSubmit={handleSubmit}>
              {successMsg && (
                <div className={`contact__alert ${successMsg.startsWith('✅') ? 'contact__alert--success' : 'contact__alert--error'}`}>
                  {successMsg}
                </div>
              )}

              <div className="form__group">
                <label htmlFor="user_name">Full Name</label>
                <input
                  type="text"
                  id="user_name"
                  name="user_name"
                  className="form__control"
                  placeholder="Enter your full name"
                  value={formData.user_name}
                  onChange={handleChange}
                />
                {errors.user_name && <p className="form__error">{errors.user_name}</p>}
              </div>

              <div className="form__group">
                <label htmlFor="user_email">Email Address</label>
                <input
                  type="email"
                  id="user_email"
                  name="user_email"
                  className="form__control"
                  placeholder="Enter your email address"
                  value={formData.user_email}
                  onChange={handleChange}
                />
                {errors.user_email && <p className="form__error">{errors.user_email}</p>}
              </div>

              <div className="form__group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="form__control"
                  placeholder="How can we help you?"
                  value={formData.message}
                  onChange={handleChange}
                />
                {errors.message && <p className="form__error">{errors.message}</p>}
              </div>

              <button type="submit" className="btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
