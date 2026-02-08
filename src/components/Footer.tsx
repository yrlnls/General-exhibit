import React from 'react';
import { FaInstagram as Instagram, FaYoutube as Youtube, FaLinkedin as Linkedin } from 'react-icons/fa';
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 py-8 md:py-10">
      <div className="container mx-auto px-6">
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left space-y-2">
              <p className="text-white/70 text-sm uppercase tracking-[0.35em]">GE Collective</p>
              <p className="text-white/50 text-sm">© {currentYear} GE Collective. All rights reserved.</p>
            </div>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/jessejesie/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-[#E4405F] transition-colors"
              >
                <Instagram size={28} />
              </a>
              <a
                href="https://www.youtube.com/@jesieotumba"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-[#FF0000] transition-colors"
              >
                <Youtube size={28} />
              </a>
              <a
                href="https://www.linkedin.com/in/jesse-otumba-a70606173/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-[#0A66C2] transition-colors"
              >
                <Linkedin size={28} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
