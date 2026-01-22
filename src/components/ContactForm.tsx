import React, { useState } from 'react';
import { Mail } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Replace with your actual form submission logic
      // For now, we'll just simulate a successful submission
      console.log('Form submitted:', formData);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });

      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
        {/* Left Side - Logo and Heading */}
        <div className="flex flex-col items-center md:items-start justify-center">
          {/* Logo Icon */}
          <div className="mb-8">
            <div className="w-32 h-32 flex items-center justify-center">
              <Mail size={80} className="text-white" strokeWidth={1.5} />
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white text-center md:text-left">
            Get In Touch
          </h2>
        </div>

        {/* Right Side - Form */}
        <div className="w-full max-w-md">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Input */}
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-transparent border border-white/30 rounded text-white placeholder-white/50 focus:border-primary focus:outline-none transition-colors"
            />

            {/* Email Input */}
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-transparent border border-white/30 rounded text-white placeholder-white/50 focus:border-primary focus:outline-none transition-colors"
            />

            {/* Message Textarea */}
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-3 bg-transparent border border-white/30 rounded text-white placeholder-white/50 focus:border-primary focus:outline-none transition-colors resize-none"
            />

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-8 py-3 border border-white/50 text-white rounded hover:bg-white hover:text-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <p className="text-green-400 text-sm">Message sent successfully!</p>
            )}
            {submitStatus === 'error' && (
              <p className="text-red-400 text-sm">Failed to send message. Please try again.</p>
            )}
          </form>
        </div>
      </div>

      {/* Divider */}
      <div className="border-b border-white/10 mt-16" />
    </section>
  );
};

export default ContactForm;
