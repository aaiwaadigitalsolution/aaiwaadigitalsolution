import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import TechnologiesTabs from '@/components/sections/TechnologiesTabs';
import { 
  Code, ShoppingCart, Smartphone, Palette, Settings, Wrench,
  ArrowRight, CheckCircle, Cpu, Database, Cloud, Shield,
  Zap, Monitor
} from 'lucide-react';

export default function TechnicalSolutions() {
  const services = [
    {
      icon: Code,
      title: 'Website Development',
      description: 'Custom websites built with modern technologies for speed, security, and scalability. From corporate sites to complex web applications.',
      technologies: ['React', 'Next.js', 'Node.js', 'MongoDB', 'PostgreSQL'],
      gradient: 'from-cyan-500 to-cyan-600',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Secure & Scalable'],
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Development',
      description: 'Launch your online store with feature-rich e-commerce solutions. Secure payments, inventory management, and seamless shopping experiences.',
      technologies: ['Shopify', 'WooCommerce', 'Magento', 'Custom Solutions'],
      gradient: 'from-emerald-500 to-emerald-600',
      features: ['Payment Integration', 'Inventory System', 'Order Management', 'Analytics Dashboard'],
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile apps that deliver exceptional user experiences. From concept to App Store launch.',
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'iOS', 'Android', 'Ionic App', 'Xamarin'],
      gradient: 'from-violet-500 to-violet-600',
      features: ['Cross-Platform', 'Native Performance', 'Push Notifications', 'Offline Support'],
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'User-centered designs that look beautiful and convert. We create intuitive interfaces through research, prototyping, and testing.',
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'Principle'],
      gradient: 'from-rose-500 to-rose-600',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Usability Testing'],
    },
    {
      icon: Settings,
      title: 'Custom Software Solutions',
      description: 'Tailored software that automates your business processes. We build scalable solutions that grow with your organization.',
      technologies: ['Python', 'Java', 'AWS', 'Docker', 'Kubernetes'],
      gradient: 'from-amber-500 to-amber-600',
      features: ['Process Automation', 'API Development', 'Cloud Integration', 'Data Analytics'],
    },
    {
      icon: Wrench,
      title: 'Website Maintenance & Support',
      description: 'Keep your digital assets running smoothly with proactive maintenance. Security updates, performance optimization, and technical support.',
      technologies: ['24/7 Monitoring', 'Security Patches', 'Performance Tuning'],
      gradient: 'from-slate-500 to-slate-600',
      features: ['Regular Backups', 'Security Updates', 'Performance Optimization', 'Priority Support'],
    },
  ];

  const techStack = [
    { name: 'React', icon: Code },
    { name: 'Node.js', icon: Database },
    { name: 'AWS', icon: Cloud },
    { name: 'Docker', icon: Cpu },
    { name: 'MongoDB', icon: Database },
    { name: 'Flutter', icon: Smartphone },
  ];

  const process = [
    { step: '01', title: 'Discovery', description: 'We analyze your requirements, goals, and target audience to create a comprehensive project plan.' },
    { step: '02', title: 'Design', description: 'Our designers create wireframes and prototypes that bring your vision to life.' },
    { step: '03', title: 'Development', description: 'Our engineers build your solution using industry best practices and modern technologies.' },
    { step: '04', title: 'Testing', description: 'Rigorous quality assurance ensures your product is bug-free and performs flawlessly.' },
    { step: '05', title: 'Launch', description: 'We deploy your solution and provide training to ensure a smooth go-live.' },
    { step: '06', title: 'Support', description: 'Ongoing maintenance and support to keep your solution running at peak performance.' },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-orange-500/20 blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-cyan-500/20 blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-6">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-6 backdrop-blur-sm">
                <Monitor className="w-4 h-4" />
                Technical Excellence
              </span>
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Build the Future with
                <span className="bg-gradient-to-r from-orange-400 to-orange-300 bg-clip-text text-transparent"> Cutting-Edge Tech</span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                From responsive websites to enterprise software, we deliver technical solutions 
                that power your digital transformation and accelerate business growth.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to={createPageUrl('Contact')}
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-400 text-white font-bold rounded-xl shadow-lg hover:shadow-orange-500/50 transition-all duration-300"
                >
                  Start Your Project
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technologies & Platforms Tab Section */}
      <TechnologiesTabs />

      {/* Services Section */}
      <section className="pt-0 pb-20 lg:pt-0 lg:pb-28 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-orange-100 text-orange-800 text-sm font-semibold mb-4">
              Our Services
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              End-to-End Technical Solutions
            </h2>
            <p className="text-lg text-slate-600">
              From concept to deployment, we handle every aspect of your technical project with expertise and precision.
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
                <p className="text-slate-600 mb-4">{service.description}</p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 text-xs font-medium bg-slate-100 text-slate-600 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Features */}
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
                  className="inline-flex items-center gap-2 text-sm font-semibold text-orange-600 hover:text-orange-700 transition-colors"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20 lg:py-28 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-orange-500/20 text-orange-400 text-sm font-semibold mb-4">
              Our Process
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              How We Build Your Solution
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              A proven methodology that ensures quality, transparency, and on-time delivery.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700"
              >
                <div className="text-6xl font-bold text-slate-700/50 absolute top-4 right-4">
                  {item.step}
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-400">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500">
        <div className="max-w-4xl mx-auto px-4 lg:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-xl text-orange-100 mb-10">
              Share your project requirements and get a detailed proposal with timeline and cost estimate.
            </p>
            <Link
              to={createPageUrl('Contact')}
              className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-orange-600 font-bold rounded-xl shadow-lg hover:bg-slate-900 hover:text-white transition-all duration-300"
            >
              Request a Free Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}