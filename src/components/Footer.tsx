import React from 'react';
import { FaInstagram as Instagram, FaYoutube as Youtube, FaLinkedin as Linkedin } from 'react-icons/fa';
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 py-6 md:py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">

          {/* Spacer to balance layout */}
          <div className="hidden md:block"></div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-1">
            <p className="text-white/60 text-lg">
              © {currentYear} General Exhibit. All rights reserved.
            </p>
            <div className='flex gap-4'>
              <a
                href='https://www.instagram.com/jessejesie/'
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#E4405F] transition-colors"
              >
                <Instagram size={48} />
              </a>
              <a
                href="https://www.youtube.com/@jesieotumba"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#FF0000] transition-colors"
              >
                <Youtube size={48} />
              </a>
              <a
                href="https://www.linkedin.com/in/jesse-otumba-a70606173/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#0A66C2] transition-colors"
              >
                <Linkedin size={48} />
              </a>
            </div>
           
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
