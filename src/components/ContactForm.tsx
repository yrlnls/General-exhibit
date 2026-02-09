import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaInstagram as Instagram, FaYoutube as Youtube, FaLinkedin as Linkedin } from 'react-icons/fa';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error' | 'config-error'>('idle');

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!serviceId || !templateId || !publicKey) {
      setStatus('config-error');
      return;
    }

    setStatus('sending');

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          title: 'Website Reachout',
          name: formData.name,
          email: formData.email,
          from_name: formData.name,
          from_email: formData.email,
          reply_to: formData.email,
          message: formData.message,
          to_email: 'jesieotumba@gmail.com',
        },
        { publicKey }
      );
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section className="w-full max-w-3xl mx-auto scroll-reveal">
      <div className="mirror-panel relative z-10 backdrop-blur-md">
        <div className="mirror-panel-inner">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-6 items-center">

            {/* LEFT */}
            <div className="flex flex-col items-center md:items-end md:text-right text-center gap-2">
              <img
                src="/Contactlogo.png"
                alt="Contact logo"
                className="w-36 h-36 md:w-44 md:h-44 object-contain"
                loading="lazy"
                decoding="async"
              />
              <p className="mirror-kicker text-2xl md:text-3xl font-semibold  ">Get In Touch</p>
             
            </div>

            {/* RIGHT */}
            <div className="w-full">
              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={status === 'sending'}
                  className="
                    w-full
                    px-4 py-3
                    bg-black/40
                    border border-white/20
                    text-white
                    placeholder-white/50
                    focus:outline-none
                    focus:border-accent
                  "
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={status === 'sending'}
                  className="
                    w-full
                    px-4 py-3
                    bg-black/40
                    border border-white/20
                    text-white
                    placeholder-white/50
                    focus:outline-none
                    focus:border-accent
                  "
                />

                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  disabled={status === 'sending'}
                  className="
                    w-full
                    px-4 py-3
                    bg-black/40
                    border border-white/20
                    text-white
                    placeholder-white/50
                    resize-none
                    focus:outline-none
                    focus:border-accent
                  "
                />

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="
                      w-full
                      px-6 py-3
                      bg-accent
                      text-accent-foreground
                      hover:bg-accent/90
                      transition-colors
                      disabled:opacity-60
                      disabled:cursor-not-allowed
                    "
                  >
                    {status === 'sending' ? 'Sending…' : 'Send Message'}
                  </button>
                </div>

                {status === 'success' && (
                  <p className="mt-4 text-sm text-emerald-200 text-center">
                    Message sent. I’ll get back to you soon.
                  </p>
                )}
                {status === 'error' && (
                  <p className="mt-4 text-sm text-red-200 text-center">
                    Something went wrong. Please try again.
                  </p>
                )}
                {status === 'config-error' && (
                  <p className="mt-4 text-sm text-amber-200 text-center">
                    Email service isn’t configured yet. Please add the EmailJS keys.
                  </p>
                )}
              </form>
            </div>
          </div>

          <div className="mt-8 border-t border-white/10 pt-6 flex items-center justify-center gap-4">
            <a
              href="https://www.instagram.com/jessejesie/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-[#E4405F] transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={26} />
            </a>
            <a
              href="https://www.youtube.com/@jesieotumba"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-[#FF0000] transition-colors"
              aria-label="YouTube"
            >
              <Youtube size={26} />
            </a>
            <a
              href="https://www.linkedin.com/in/jesse-otumba-a70606173/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-[#0A66C2] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={26} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
