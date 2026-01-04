import React from 'react';
import { motion } from 'framer-motion';
import FeatureCard from '@/components/cards/FeatureCard';
import { 
  Award, Users, DollarSign, Heart, Zap, Shield,
  TrendingUp, Clock
} from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      icon: Award,
      title: '10+ Years Experience',
      description: 'A decade of proven expertise delivering exceptional digital solutions across industries.',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Skilled professionals specializing in marketing, development, and design excellence.',
    },
    {
      icon: DollarSign,
      title: 'Affordable Pricing',
      description: 'Competitive rates without compromising on quality. Maximum value for your investment.',
    },
    {
      icon: Heart,
      title: '98% Client Satisfaction',
      description: 'Our client-first approach ensures your success is our top priority.',
    },
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'Agile methodology ensures quick turnaround without sacrificing quality.',
    },
    {
      icon: Shield,
      title: '24/7 Support',
      description: 'Round-the-clock assistance to keep your digital presence running smoothly.',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-gradient-to-br from-blue-100/50 to-orange-100/50 rounded-full blur-3xl opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-orange-100 text-orange-600 text-sm font-semibold mb-4">
            Why Partner With Us
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            The AAIWAA{' '}
            <span className="bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent">
              Advantage
            </span>
          </h2>
          <p className="text-lg text-slate-600">
            We combine innovation, expertise, and dedication to deliver results that exceed expectations. 
            Here's what sets us apart.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              {...feature}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Bottom Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 lg:p-12"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-4xl lg:text-5xl font-bold text-white mb-2">
                <TrendingUp className="w-8 h-8 text-orange-500" />
                500+
              </div>
              <p className="text-slate-400">Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-4xl lg:text-5xl font-bold text-white mb-2">
                <Users className="w-8 h-8 text-orange-500" />
                300+
              </div>
              <p className="text-slate-400">Happy Clients</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-4xl lg:text-5xl font-bold text-white mb-2">
                <Award className="w-8 h-8 text-orange-500" />
                25+
              </div>
              <p className="text-slate-400">Industry Awards</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-4xl lg:text-5xl font-bold text-white mb-2">
                <Clock className="w-8 h-8 text-orange-500" />
                24/7
              </div>
              <p className="text-slate-400">Support Available</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}