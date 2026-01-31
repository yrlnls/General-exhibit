import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="w-full py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* LEFT */}
        <div className="flex flex-col items-center md:items-end justify-center text-center md:text-right">
          {/* <div className="mb-10"> */}
            <img
              src="/Contactlogo.png"
              alt="Contact logo"
              className="w-48 h-48
                         md:w-64 md:h-64 object-contain mb-6"
            />
          {/* </div> */}

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
                className="
                  px-8 py-3
                  border border-white/50
                  text-white
                  hover:bg-white hover:text-black
                  transition-colors
                "
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="border-b border-white/20 mt-24" />
    </section>
  );
};

export default ContactForm;
