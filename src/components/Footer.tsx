import React from 'react';
import { Instagram, Youtube, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-white/10 py-8 md:py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-foreground font-semibold text-sm tracking-wider mb-4">
              JESSE OTUMBA OTIENO
            </h3>
            <p className="text-white/60 text-sm">
              Exploring the world through work, art, and storytelling.
            </p>
          </div>

          {/* Social */}
          <div>
            {/* <h4 className="text-foreground font-semibold text-sm tracking-wider mb-4">Follow</h4> */}
            <div className="flex gap-4">
              <a href="https://instagram.com" className="text-primary hover:text-primary/80 transition-colors" target="_blank" rel="noopener noreferrer">
                <Instagram size={40} />
              </a>
              <a href="https://youtube.com" className="text-primary hover:text-primary/80 transition-colors" target="_blank" rel="noopener noreferrer">
                <Youtube size={40} />
              </a>
              <a href="https://linkedin.com" className="text-primary hover:text-primary/80 transition-colors" target="_blank" rel="noopener noreferrer">
                <Linkedin size={40} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © {currentYear} Jesse Otumba Otieno. All rights reserved.
            </p>
           
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
