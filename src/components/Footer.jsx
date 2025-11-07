import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="mt-20 border-t border-black/10 bg-white/70 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} Alpha Ledger. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="mailto:you@example.com" className="rounded-full border border-black/10 p-2 text-gray-700 hover:bg-gray-50">
              <Mail className="h-4 w-4" />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="rounded-full border border-black/10 p-2 text-gray-700 hover:bg-gray-50">
              <Github className="h-4 w-4" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="rounded-full border border-black/10 p-2 text-gray-700 hover:bg-gray-50">
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
