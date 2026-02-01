import React from 'react';
import { Instagram, Youtube, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-white/10 py-8 md:py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">

          {/* Spacer to balance layout */}
          <div className="hidden md:block"></div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-1">
            <p className="text-white/60 text-sm">
              © {currentYear} Jesse Otumba Otieno. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/jessejesie/" className="text-primary hover:text-primary/80 transition-colors" target="_blank" rel="noopener noreferrer">
                <Instagram size={40} />
              </a>
              <a href="https://www.youtube.com/@jesieotumba" className="text-primary hover:text-primary/80 transition-colors" target="_blank" rel="noopener noreferrer">
                <Youtube size={40} />
              </a>
              <a href="https://www.linkedin.com/in/jesse-otumba-a70606173/" className="text-primary hover:text-primary/80 transition-colors" target="_blank" rel="noopener noreferrer">
                <Linkedin size={40} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
