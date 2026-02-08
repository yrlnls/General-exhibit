import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

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
    <section className="w-full py-16">
      <div className="mirror-surface">
        <span className="mirror-title">Connect</span>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center p-6 md:p-10">
          {/* LEFT */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
            <img
              src="/Contactlogo.png"
              alt="GE Collective"
              className="w-36 h-36 md:w-44 md:h-44 object-contain"
              loading="lazy"
              decoding="async"
            />
            <p className="section-kicker">Get In Touch</p>
            <p className="text-white/70 text-sm md:text-base leading-relaxed max-w-sm">
              Tell us about the story you want to bring to life. We'll shape it
              with intention, precision, and care.
            </p>
          </div>

          {/* RIGHT */}
          <div className="w-full max-w-md">
            <form onSubmit={handleSubmit} className="space-y-4">
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
                  px-4
                  py-3.5
                  rounded-lg
                  bg-black/40
                  border
                  border-white/20
                  text-white
                  placeholder-white/50
                  focus:outline-none
                  focus:border-primary/70
                  transition-colors
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
                  px-4
                  py-3.5
                  rounded-lg
                  bg-black/40
                  border
                  border-white/20
                  text-white
                  placeholder-white/50
                  focus:outline-none
                  focus:border-primary/70
                  transition-colors
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
                  px-4
                  py-3.5
                  rounded-lg
                  bg-black/40
                  border
                  border-white/20
                  text-white
                  placeholder-white/50
                  resize-none
                  focus:outline-none
                  focus:border-primary/70
                  transition-colors
                "
              />

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="
                    w-full
                    px-8
                    py-3.5
                    rounded-lg
                    border
                    border-white/30
                    text-white
                    hover:border-primary/60
                    hover:text-primary
                    transition-colors
                    disabled:opacity-60
                    disabled:cursor-not-allowed
                  "
                >
                  {status === 'sending' ? 'Sending…' : 'Send Message'}
                </button>
              </div>

              {status === 'success' && (
                <p className="text-sm text-emerald-200">
                  Message sent. I'll get back to you soon.
                </p>
              )}
              {status === 'error' && (
                <p className="text-sm text-red-200">
                  Something went wrong. Please try again.
                </p>
              )}
              {status === 'config-error' && (
                <p className="text-sm text-amber-200">
                  Email service isn't configured yet. Please add the EmailJS keys.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
