import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ServiceCard({ 
  icon: Icon, 
  title, 
  description, 
  technologies = [],
  linkPath = 'Contact',
  delay = 0,
  gradient = 'from-blue-500 to-blue-600'
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group relative bg-white rounded-2xl p-6 lg:p-8 shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:shadow-slate-300/50 transition-all duration-500 border border-slate-100 hover:border-transparent overflow-hidden"
    >
      {/* Gradient overlay on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      
      {/* Content */}
      <div className="relative z-10">
        {/* Icon */}
        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-6 shadow-lg group-hover:bg-white/20 group-hover:shadow-white/20 transition-all duration-500`}>
          <Icon className="w-7 h-7 text-white" />
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-slate-900 group-hover:text-white mb-3 transition-colors duration-500">
          {title}
        </h3>

        {/* Description */}
        <p className="text-slate-600 group-hover:text-white/90 leading-relaxed mb-4 transition-colors duration-500">
          {description}
        </p>

        {/* Technologies */}
        {technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {technologies.map((tech) => (
              <span 
                key={tech}
                className="px-3 py-1 text-xs font-medium bg-slate-100 text-slate-600 rounded-full group-hover:bg-white/20 group-hover:text-white transition-colors duration-500"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* CTA Link */}
        <Link
          to={createPageUrl(linkPath)}
          className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 group-hover:text-white transition-colors duration-500"
        >
          Learn More
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Decorative element */}
      <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-gradient-to-br from-orange-500/10 to-orange-600/10 group-hover:from-white/10 group-hover:to-white/5 transition-colors duration-500" />
    </motion.div>
  );
}