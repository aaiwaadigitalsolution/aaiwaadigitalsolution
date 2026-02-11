import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { 
  Phone, Mail, MapPin, ArrowRight, 
  Linkedin, Twitter, Facebook, Instagram,
  ChevronRight
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'SEO Optimization', path: 'DigitalMarketing' },
    { name: 'Social Media Marketing', path: 'DigitalMarketing' },
    { name: 'Google Ads', path: 'DigitalMarketing' },
    { name: 'Website Development', path: 'TechnicalSolutions' },
    { name: 'Mobile App Development', path: 'TechnicalSolutions' },
    { name: 'UI/UX Design', path: 'TechnicalSolutions' },
  ];

  const quickLinks = [
    { name: 'Home', path: 'Home' },
    { name: 'About Us', path: 'About' },
    { name: 'Our Services', path: 'DigitalMarketing' },
    { name: 'Contact Us', path: 'Contact' },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/company/aaiwaa-digital-solution/",
      label: "LinkedIn",
    },
    // { icon: Twitter, href: '#', label: 'Twitter' },
    {
      icon: Facebook,
      href: "https://www.facebook.com/profile.php?id=61586364833341",
      label: "Facebook",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/aaiwaadigital/",
      label: "Instagram",
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 lg:px-6 pt-32 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-[30px] bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
                <img
                  src="/vite.png"
                  alt="AAIWAA Logo"
                  className="w-12 h-12 rounded-[30px] bg-gradient-to-br from-blue-900 to-blue-700 flex items-center justify-center shadow-lg shadow-blue-900/30 group-hover:shadow-blue-900/50 transition-shadow"
                />
              </div>
              <div>
                <h2 className="text-xl font-bold">AAIWAA</h2>
                <p className="text-[10px] tracking-[0.2em] text-slate-400">
                  DIGITAL SOLUTION
                </p>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed mb-6">
              Your trusted partner for digital marketing excellence and
              cutting-edge technical solutions. We transform businesses through
              innovation and strategic digital expertise.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-orange-500 flex items-center justify-center transition-colors duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <div className="w-8 h-0.5 bg-orange-500" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={createPageUrl(link.path)}
                    className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
                  >
                    <ChevronRight className="w-4 h-4 text-orange-500 group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <div className="w-8 h-0.5 bg-orange-500" />
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={createPageUrl(service.path)}
                    className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
                  >
                    <ChevronRight className="w-4 h-4 text-orange-500 group-hover:translate-x-1 transition-transform" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <div className="w-8 h-0.5 bg-orange-500" />
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+919876543210"
                  className="flex items-start gap-3 text-slate-400 hover:text-white transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Call Us</p>
                    <p className="font-medium text-white">+91 7096224922</p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@aaiwaa.com"
                  className="flex items-start gap-3 text-slate-400 hover:text-white transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Email Us</p>
                    <p className="font-medium text-white">info@aaiwaa.com</p>
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-slate-400">
                  <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Visit Us</p>
                    <p className="font-medium text-white">
                      614 , MBC , Mota Varachhak
                      <br />
                      Surat , Gujarat, India 394101
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm text-center md:text-left">
              © {currentYear} AAIWAA Digital Solution. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-slate-500">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}