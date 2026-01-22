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

          {/* Navigation */}
          <div>
            <h4 className="text-foreground font-semibold text-sm tracking-wider mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-white/60 hover:text-white transition-colors text-sm">About</a></li>
              <li><a href="/work" className="text-white/60 hover:text-white transition-colors text-sm">Work</a></li>
              <li><a href="/travel" className="text-white/60 hover:text-white transition-colors text-sm">Travel</a></li>
              <li><a href="/education" className="text-white/60 hover:text-white transition-colors text-sm">Education</a></li>
              <li><a href="/contact" className="text-white/60 hover:text-white transition-colors text-sm">Contact</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-foreground font-semibold text-sm tracking-wider mb-4">Follow</h4>
            <div className="flex gap-4">
              <a href="https://instagram.com" className="text-primary hover:text-primary/80 transition-colors" target="_blank" rel="noopener noreferrer">
                <Instagram size={24} />
              </a>
              <a href="https://youtube.com" className="text-primary hover:text-primary/80 transition-colors" target="_blank" rel="noopener noreferrer">
                <Youtube size={24} />
              </a>
              <a href="https://linkedin.com" className="text-primary hover:text-primary/80 transition-colors" target="_blank" rel="noopener noreferrer">
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-foreground font-semibold text-sm tracking-wider mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a href="mailto:contact@example.com" className="text-white/60 hover:text-white transition-colors text-sm">
                  contact@example.com
                </a>
              </li>
              <li className="text-white/60 text-sm">
                +254 700 000 000
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © {currentYear} Jesse Otumba Otieno. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
