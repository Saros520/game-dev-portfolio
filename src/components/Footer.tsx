import React from 'react';
import { Heart, Code, IceCream2, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/joshuagoulden520/', icon: '💼' },
    { name: 'Itch.io', url: 'https://joshuagoulden520.itch.io/', icon: '🎮' },
    { name: 'YouTube', url: 'https://www.youtube.com/@Umbra-Gaming-2520', icon: '📺' },
    { name: 'Instagram', url: 'https://www.instagram.com/_umbra_gaming_/', icon: '📷' },
    { name: 'BlueSky', url: 'https://bsky.app/profile/umbragaming.bsky.social', icon: '🦋' },
    { name: 'Twitter', url: 'https://x.com/Umbra_Gaming_', icon: '🐦' },
  ];

  return (
    <footer className="bg-dark border-t border-primary/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo and Description - Centered */}
        <div className="text-center mb-6">
          <h3 className="text-2xl font-heading font-bold text-primary mb-2">UmbraGaming</h3>
          <p className="text-gray-400">Crafting Digital Adventures</p>
        </div>

        {/* Navigation Links - Centered */}
        <div className="flex flex-wrap justify-center gap-6 text-sm mb-8">
          {['Home', 'About', 'Skills', 'Projects', 'Testimonials', 'Contact'].map((link) => (
            <button
              key={link}
              onClick={() => {
                const element = document.getElementById(link.toLowerCase());
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="text-gray-400 hover:text-primary transition-colors"
            >
              {link}
            </button>
          ))}
        </div>

        {/* Social Media Links */}
        <div className="mb-8">
          <h4 className="text-lg font-semibold text-white mb-4 text-center">Connect With Me</h4>
          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors text-sm bg-dark-card px-4 py-2 rounded-lg border border-primary/20 hover:border-primary/40"
              >
                <span className="text-base">{social.icon}</span>
                {social.name}
                <ExternalLink size={14} />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary/20 pt-8">
          {/* Made with love */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-gray-400 text-sm mb-4">
            <span>Made with</span>
            <div className="flex items-center gap-1">
              <Heart size={16} className="text-secondary" />
              <Code size={16} className="text-primary" />
              <IceCream2 size={16} className="text-warning" />
            </div>
            <span>by a passionate game developer</span>
          </div>

          {/* Copyright */}
          <p className="text-gray-500 text-xs text-center">
            © {currentYear} UmbraGaming. All rights reserved. Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;