import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { ArrowRight, Play, CheckCircle, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const stats = [
    { value: '500+', label: 'Projects Delivered' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '10+', label: 'Years Experience' },
    { value: '50+', label: 'Expert Team' },
  ];

  const features = [
    'Data-Driven Strategies',
    'ROI-Focused Campaigns',
    'Custom Solutions',
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        
        {/* Gradient orbs */}
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-gradient-to-br from-orange-400/20 to-pink-400/20 blur-3xl" />
        
        {/* Floating shapes */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute top-1/4 right-1/4 w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 opacity-10"
        />
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute bottom-1/3 left-1/4 w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 opacity-10"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-6 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6"
            >
              <Sparkles className="w-4 h-4" />
              
            </motion.div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-slate-900">Accelerate Your</span>
              <br />
              <span className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-900 bg-clip-text text-transparent">
                Digital Growth
              </span>
              <br />
              <span className="text-slate-900">With Expert</span>
              <span className="bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent"> Solutions</span>
            </h1>

            {/* Description */}
            <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-xl">
              From strategic digital marketing campaigns to cutting-edge web and mobile solutions, 
              we deliver measurable results that drive your business forward. Partner with industry experts 
              who understand your vision.
            </p>

            {/* Service Navigation Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                to={createPageUrl('DigitalMarketing')}
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-900 to-blue-800 text-white font-semibold rounded-xl shadow-lg shadow-blue-900/30 hover:shadow-blue-900/50 hover:from-blue-800 hover:to-blue-700 hover:-translate-y-0.5 transition-all duration-300"
              >
                <span>Digital Marketing</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to={createPageUrl('TechnicalSolutions')}
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-900 font-semibold rounded-xl border-2 border-blue-900 hover:bg-blue-900 hover:text-white shadow-lg hover:shadow-blue-900/30 transition-all duration-300"
              >
                <span>Technical Solutions</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-4 mb-10">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-2 text-slate-700">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* Bottom CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link
                to={createPageUrl('Contact')}
                className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-400 text-white font-semibold rounded-xl shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:-translate-y-0.5 transition-all duration-300"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to={createPageUrl('About')}
                className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 font-semibold rounded-xl border-2 border-slate-200 hover:border-slate-900 hover:text-slate-900 transition-all duration-300"
              >
                Learn More About Us
              </Link>
            </div>
          </motion.div>

          {/* Right Content - Stats & Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Main visual container */}
            <div className="relative">
              {/* Image placeholder with gradient overlay */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-300/50">
                <img
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80"
                  alt="Digital Marketing Team"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                
                {/* Overlay content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                  <div className="grid grid-cols-2 gap-4">
                    {stats.map((stat, index) => (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20"
                      >
                        <div className="text-2xl lg:text-3xl font-bold text-white mb-1">
                          {stat.value}
                        </div>
                        <div className="text-sm text-white/80">
                          {stat.label}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                className="absolute -top-6 -left-6 lg:-left-10 bg-white rounded-2xl p-4 shadow-xl shadow-slate-200/50 border border-slate-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">This Month</p>
                    <p className="font-bold text-slate-900">+127% Growth</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}