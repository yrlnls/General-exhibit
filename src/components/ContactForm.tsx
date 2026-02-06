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
    <section className="w-full py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-0.5 items-center">

{/* LEFT */}
<div className="flex flex-col items-center justify-center text-center gap-0.25">
  <img
    src="/Contactlogo.png"
    alt="Contact logo"
    className="w-48 h-48 md:w-64 md:h-64 object-contain"
    loading="lazy"
    decoding="async"
  />
  <h2 className="text-3xl font-semibold text-white">
    Get In Touch
  </h2>
</div>


        {/* RIGHT */}
        <div className="w-full max-w-md">
          <form onSubmit={handleSubmit} className="space-y-0">

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
                px-4 py-4
                bg-transparent
                border border-white/40
                text-white
                placeholder-white/50
                focus:outline-none
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
                px-4 py-4
                bg-transparent
                border-x border-b border-white/40
                text-white
                placeholder-white/50
                focus:outline-none
              "
            />

            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={8}
              disabled={status === 'sending'}
              className="
                w-full
                px-4 py-4
                bg-transparent
                border-x border-b border-white/40
                text-white
                placeholder-white/50
                resize-none
                focus:outline-none
              "
            />

            <div className="mt-6">
              <button
                type="submit"
                disabled={status === 'sending'}
                className="
                  px-8 py-3
                  border border-white/50
                  text-white
                  hover:bg-white hover:text-black
                  transition-colors
                  disabled:opacity-60
                  disabled:cursor-not-allowed
                "
              >
                {status === 'sending' ? 'Sending…' : 'Send Message'}
              </button>
            </div>

            {status === 'success' && (
              <p className="mt-4 text-sm text-emerald-200">
                Message sent. I’ll get back to you soon.
              </p>
            )}
            {status === 'error' && (
              <p className="mt-4 text-sm text-red-200">
                Something went wrong. Please try again.
              </p>
            )}
            {status === 'config-error' && (
              <p className="mt-4 text-sm text-amber-200">
                Email service isn’t configured yet. Please add the EmailJS keys.
              </p>
            )}
          </form>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="border-b border-white/20 mt-24" />
    </section>
  );
};

export default ContactForm;
