import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import ServiceCard from '@/components/cards/ServiceCard';
import { 
  Search, Share2, Target, FileText, Mail, Lightbulb,
  TrendingUp, BarChart3, Users, Globe, Megaphone, PenTool,
  ArrowRight, CheckCircle, Star
} from 'lucide-react';

export default function DigitalMarketing() {
  const services = [
    {
      icon: Search,
      title: 'Search Engine Optimization (SEO)',
      description: 'Dominate search rankings with our comprehensive SEO strategies. We optimize on-page elements, build quality backlinks, and create content that ranks.',
      gradient: 'from-blue-500 to-blue-600',
      features: ['Technical SEO Audit', 'Keyword Research', 'Content Optimization', 'Link Building'],
    },
    {
      icon: Share2,
      title: 'Social Media Marketing',
      description: 'Build brand awareness and engage your audience across all social platforms. Strategic content creation and community management that drives results.',
      gradient: 'from-purple-500 to-purple-600',
      features: ['Content Strategy', 'Community Management', 'Influencer Outreach', 'Analytics'],
    },
    {
      icon: Target,
      title: 'Google Ads & Paid Advertising',
      description: 'Maximize your advertising ROI with precision-targeted PPC campaigns. We manage Google Ads, social media ads, and display advertising.',
      gradient: 'from-orange-500 to-orange-600',
      features: ['Campaign Setup', 'A/B Testing', 'Conversion Tracking', 'Budget Optimization'],
    },
    {
      icon: FileText,
      title: 'Content Marketing',
      description: 'Tell your brand story through compelling content that educates, entertains, and converts. Blogs, videos, infographics, and more.',
      gradient: 'from-green-500 to-green-600',
      features: ['Blog Writing', 'Video Production', 'Infographics', 'Case Studies'],
    },
    {
      icon: Mail,
      title: 'Email Marketing',
      description: 'Nurture leads and drive repeat sales with personalized email campaigns. Automated workflows that deliver the right message at the right time.',
      gradient: 'from-pink-500 to-pink-600',
      features: ['Campaign Design', 'Automation Setup', 'List Segmentation', 'A/B Testing'],
    },
    {
      icon: Lightbulb,
      title: 'Branding & Strategy',
      description: 'Define your unique market position with strategic branding that resonates. Logo design, brand guidelines, and messaging frameworks.',
      gradient: 'from-indigo-500 to-indigo-600',
      features: ['Brand Identity', 'Market Research', 'Competitor Analysis', 'Positioning'],
    },
  ];

  const stats = [
    { icon: TrendingUp, value: '340%', label: 'Average Traffic Increase' },
    { icon: BarChart3, value: '85%', label: 'Conversion Rate Boost' },
    { icon: Users, value: '500+', label: 'Successful Campaigns' },
    { icon: Globe, value: '50+', label: 'Countries Reached' },
  ];

  const testimonials = [
    {
      quote: "AAIWAA transformed our online presence. Our organic traffic increased by 400% in just 6 months!",
      author: "Rajesh Kumar",
      role: "CEO, TechStart India",
      rating: 5,
    },
    {
      quote: "Their social media strategies helped us build a community of 100K+ engaged followers.",
      author: "Priya Sharma",
      role: "Marketing Director, Fashion Hub",
      rating: 5,
    },
    {
      quote: "The ROI on our Google Ads campaigns has been exceptional. Best digital marketing team we've worked with.",
      author: "Amit Patel",
      role: "Founder, E-commerce Plus",
      rating: 5,
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-orange-500/20 blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-6">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-6 backdrop-blur-sm">
                <Megaphone className="w-4 h-4" />
                Digital Marketing Excellence
              </span>
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Amplify Your Brand with
                <span className="bg-gradient-to-r from-orange-400 to-orange-300 bg-clip-text text-transparent"> Data-Driven Marketing</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                From SEO to social media, we craft strategic digital marketing campaigns that increase visibility, 
                engage audiences, and generate measurable business results.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to={createPageUrl('Contact')}
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-900 font-bold rounded-xl shadow-lg hover:bg-orange-500 hover:text-white transition-all duration-300"
                >
                  Start Your Campaign
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      Stats Section
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-100 mb-4">
                  <stat.icon className="w-7 h-7 text-blue-600" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-slate-900 mb-1">
                  {stat.value}
                </div>
                <p className="text-slate-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold mb-4">
              Our Services
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Comprehensive Digital Marketing Solutions
            </h2>
            <p className="text-lg text-slate-600">
              Everything you need to dominate the digital landscape and stay ahead of your competition.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg shadow-slate-200/50 border border-slate-100 hover:shadow-xl transition-shadow duration-300"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 shadow-lg`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-slate-700">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to={createPageUrl('Contact')}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-28 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-orange-500/20 text-orange-400 text-sm font-semibold mb-4">
              Client Success Stories
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              What Our Clients Say
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-slate-700"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-300 italic mb-6">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-white">{testimonial.author}</p>
                  <p className="text-sm text-slate-400">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900">
        <div className="max-w-4xl mx-auto px-4 lg:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Grow Your Business Online?
            </h2>
            <p className="text-xl text-blue-100 mb-10">
              Let's discuss your marketing goals and create a customized strategy that delivers results.
            </p>
            <Link
              to={createPageUrl('Contact')}
              className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-900 font-bold rounded-xl shadow-lg hover:bg-orange-500 hover:text-white transition-all duration-300"
            >
              Get Your Free Marketing Audit
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}