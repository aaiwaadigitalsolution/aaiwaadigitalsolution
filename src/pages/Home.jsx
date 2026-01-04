import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import HeroSection from '@/components/sections/HeroSection';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import ServiceCard from '@/components/cards/ServiceCard';
import { 
  Search, Share2, Target, FileText, Mail, Lightbulb,
  Code, ShoppingCart, Smartphone, Palette, Settings, Wrench,
  ArrowRight
} from 'lucide-react';

export default function Home() {
  const digitalServices = [
    {
      icon: Search,
      title: 'Search Engine Optimization',
      description: 'Boost your online visibility with data-driven SEO strategies. We optimize your website to rank higher on Google and drive organic traffic that converts.',
      gradient: 'from-blue-500 to-blue-600',
    },
    {
      icon: Share2,
      title: 'Social Media Marketing',
      description: 'Build a powerful social presence across platforms. We create engaging content and targeted campaigns that connect your brand with your audience.',
      gradient: 'from-purple-500 to-purple-600',
    },
    {
      icon: Target,
      title: 'Google Ads & PPC',
      description: 'Maximize ROI with precision-targeted paid advertising. Our certified experts manage campaigns that deliver measurable results and qualified leads.',
      gradient: 'from-orange-500 to-orange-600',
    },
    {
      icon: FileText,
      title: 'Content Marketing',
      description: 'Tell your brand story through compelling content. We create blogs, videos, and infographics that educate, engage, and convert your audience.',
      gradient: 'from-green-500 to-green-600',
    },
    {
      icon: Mail,
      title: 'Email Marketing',
      description: 'Nurture leads and drive sales with personalized email campaigns. We design automated sequences that keep your audience engaged and buying.',
      gradient: 'from-pink-500 to-pink-600',
    },
    {
      icon: Lightbulb,
      title: 'Branding & Strategy',
      description: 'Define your unique market position with strategic branding. We craft brand identities that resonate with your target customers and stand out.',
      gradient: 'from-indigo-500 to-indigo-600',
    },
  ];

  const techServices = [
    {
      icon: Code,
      title: 'Website Development',
      description: 'Custom websites built with modern technologies for speed, security, and scalability. From landing pages to complex web applications.',
      technologies: ['React', 'Next.js', 'Node.js', 'MongoDB'],
      gradient: 'from-cyan-500 to-cyan-600',
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Development',
      description: 'Launch your online store with feature-rich e-commerce solutions. Secure payments, inventory management, and seamless shopping experiences.',
      technologies: ['Shopify', 'WooCommerce', 'Magento'],
      gradient: 'from-emerald-500 to-emerald-600',
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile apps that deliver exceptional user experiences. From concept to App Store launch.',
      technologies: ['React Native', 'Flutter', 'iOS', 'Android'],
      gradient: 'from-violet-500 to-violet-600',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'User-centered designs that look beautiful and convert. We create intuitive interfaces through research, prototyping, and testing.',
      technologies: ['Figma', 'Adobe XD', 'Sketch'],
      gradient: 'from-rose-500 to-rose-600',
    },
    {
      icon: Settings,
      title: 'Custom Software Solutions',
      description: 'Tailored software that automates your business processes. We build scalable solutions that grow with your organization.',
      technologies: ['Python', 'Java', 'AWS', 'Docker'],
      gradient: 'from-amber-500 to-amber-600',
    },
    {
      icon: Wrench,
      title: 'Website Maintenance',
      description: 'Keep your digital assets running smoothly with proactive maintenance. Security updates, performance optimization, and technical support.',
      technologies: ['24/7 Support', 'Security', 'Updates'],
      gradient: 'from-slate-500 to-slate-600',
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <HeroSection />

      {/* Digital Marketing Services */}
      <section className="py-20 lg:py-28 bg-white relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-100 to-transparent rounded-full blur-3xl opacity-50" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-6">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold mb-4">
              Digital Marketing
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Drive Growth with Strategic{' '}
              <span className="bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent">
                Digital Marketing
              </span>
            </h2>
            <p className="text-lg text-slate-600">
              From SEO to social media, we craft data-driven campaigns that increase your visibility, 
              engage your audience, and generate measurable results.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {digitalServices.map((service, index) => (
              <ServiceCard
                key={service.title}
                {...service}
                delay={index * 0.1}
                linkPath="DigitalMarketing"
              />
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to={createPageUrl('DigitalMarketing')}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-900 to-blue-800 text-white font-semibold rounded-xl shadow-lg shadow-blue-900/30 hover:shadow-blue-900/50 hover:-translate-y-0.5 transition-all duration-300"
            >
              Explore All Marketing Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Technical Solutions */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white relative">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-orange-100 to-transparent rounded-full blur-3xl opacity-50" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-6">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-orange-100 text-orange-800 text-sm font-semibold mb-4">
              Technical Solutions
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Build with Cutting-Edge{' '}
              <span className="bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
                Technology
              </span>
            </h2>
            <p className="text-lg text-slate-600">
              From responsive websites to enterprise software, we deliver technical solutions 
              that power your digital transformation and accelerate business growth.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {techServices.map((service, index) => (
              <ServiceCard
                key={service.title}
                {...service}
                delay={index * 0.1}
                linkPath="TechnicalSolutions"
              />
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to={createPageUrl('TechnicalSolutions')}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-400 text-white font-semibold rounded-xl shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:-translate-y-0.5 transition-all duration-300"
            >
              Explore All Tech Solutions
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Final CTA Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 lg:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Ready to Start Your
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-orange-300 bg-clip-text text-transparent">
                Digital Transformation?
              </span>
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Let's discuss how AAIWAA Digital Solution can help you achieve your business goals. 
              Get a free consultation today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to={createPageUrl('Contact')}
                className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-900 font-bold rounded-xl shadow-lg hover:bg-orange-500 hover:text-white transition-all duration-300"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to={createPageUrl('About')}
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300"
              >
                Learn About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}