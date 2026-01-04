import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { 
  Target, Eye, Users, Award, Heart, Zap,
  ArrowRight, CheckCircle, Building2, Calendar
} from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'We focus on delivering measurable outcomes that directly impact your business growth and success.',
    },
    {
      icon: Heart,
      title: 'Client-Centric',
      description: 'Your success is our priority. We build lasting partnerships based on trust and transparency.',
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We stay ahead of industry trends to bring you cutting-edge solutions that give you a competitive edge.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work closely with your team, ensuring seamless communication and alignment at every stage.',
    },
  ];

  const milestones = [
    { year: '2014', title: 'Founded', description: 'AAIWAA Digital Solution was established with a vision to transform businesses through digital innovation.' },
    { year: '2016', title: 'First 100 Clients', description: 'Reached our first major milestone, serving clients across multiple industries.' },
    { year: '2018', title: 'Team Expansion', description: 'Grew to a team of 25+ experts, adding specialized digital marketing and development capabilities.' },
    { year: '2020', title: 'International Reach', description: 'Expanded services globally, working with clients in 20+ countries.' },
    { year: '2022', title: '500+ Projects', description: 'Completed over 500 successful projects with a 98% client satisfaction rate.' },
    { year: '2024', title: 'Industry Leader', description: 'Recognized as a leading digital solutions provider with multiple industry awards.' },
  ];

  const team = [
    { name: 'Arun Kumar', role: 'Founder & CEO', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80' },
    { name: 'Priya Sharma', role: 'Head of Marketing', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80' },
    { name: 'Vikram Singh', role: 'Technical Director', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80' },
    { name: 'Anjali Patel', role: 'Design Lead', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=80' },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-blue-900 via-slate-900 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute top-20 left-20 w-96 h-96 rounded-full bg-blue-500/20 blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-6 backdrop-blur-sm">
                <Building2 className="w-4 h-4" />
                About AAIWAA Digital Solution
              </span>
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Transforming Businesses
                <span className="bg-gradient-to-r from-orange-400 to-orange-300 bg-clip-text text-transparent"> Since 2014</span>
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                We are a team of passionate digital experts dedicated to helping businesses thrive in the digital age 
                through innovative marketing strategies and cutting-edge technical solutions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-blue-100 rounded-2xl -z-10" />
              <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-xl shadow-slate-200/50 border border-slate-100">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center mb-6 shadow-lg">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h2>
                <p className="text-slate-600 leading-relaxed">
                  To empower businesses of all sizes with innovative digital solutions that drive growth, 
                  enhance brand visibility, and create lasting value. We are committed to delivering 
                  excellence through expertise, integrity, and a relentless focus on client success.
                </p>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-orange-100 rounded-2xl -z-10" />
              <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-xl shadow-slate-200/50 border border-slate-100">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center mb-6 shadow-lg">
                  <Eye className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h2>
                <p className="text-slate-600 leading-relaxed">
                  To be the most trusted digital partner for businesses worldwide, recognized for our 
                  innovative approach, exceptional results, and unwavering commitment to helping our 
                  clients achieve their full potential in the digital landscape.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold mb-4">
              Our Core Values
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              What Drives Us Every Day
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg shadow-slate-200/50 border border-slate-100 text-center hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{value.title}</h3>
                <p className="text-sm text-slate-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 lg:py-28 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/20 text-orange-400 text-sm font-semibold mb-4">
              <Calendar className="w-4 h-4" />
              Our Journey
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              A Decade of Excellence
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-slate-700 hidden lg:block" />

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:text-right lg:pr-12' : 'lg:text-left lg:pl-12'}`}>
                    <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700">
                      <span className="text-orange-400 font-bold text-lg">{milestone.year}</span>
                      <h3 className="text-xl font-bold text-white mt-1 mb-2">{milestone.title}</h3>
                      <p className="text-slate-400">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Center dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-orange-500 border-4 border-slate-900 hidden lg:block" />
                  
                  <div className="lg:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-orange-100 text-orange-800 text-sm font-semibold mb-4">
              Leadership Team
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Meet the Experts Behind Your Success
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group text-center"
              >
                <div className="relative mb-4 overflow-hidden rounded-2xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">{member.name}</h3>
                <p className="text-sm text-slate-600">{member.role}</p>
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
              Ready to Start Your Journey With Us?
            </h2>
            <p className="text-xl text-blue-100 mb-10">
              Let's discuss how we can help transform your business and achieve your goals.
            </p>
            <Link
              to={createPageUrl('Contact')}
              className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-900 font-bold rounded-xl shadow-lg hover:bg-orange-500 hover:text-white transition-all duration-300"
            >
              Get in Touch
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}