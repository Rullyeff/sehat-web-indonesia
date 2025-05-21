
import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react'; // Using Linkedin as a generic professional network icon

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800 text-slate-200 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-4">
          <p className="text-lg font-semibold">Klinik Kesehatan Sejahtera</p>
          <p className="text-sm">Jl. Sehat Selalu No. 123, Kota Bahagia, Indonesia</p>
          <p className="text-sm">Telepon: (021) 123-4567 | Email: info@kliniksejahtera.com</p>
        </div>
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors"><Facebook size={24} /></a>
          <a href="#" className="text-slate-400 hover:text-pink-500 transition-colors"><Instagram size={24} /></a>
          <a href="#" className="text-slate-400 hover:text-sky-500 transition-colors"><Twitter size={24} /></a>
          <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors"><Linkedin size={24} /></a>
        </div>
        <p className="text-sm text-slate-500">
          &copy; {new Date().getFullYear()} Klinik Kesehatan Sejahtera. Semua hak dilindungi.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
