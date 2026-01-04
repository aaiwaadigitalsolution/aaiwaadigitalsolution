import React from 'react';
import { motion } from 'framer-motion';

export default function FeatureCard({ 
  icon: Icon, 
  title, 
  description, 
  delay = 0 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group text-center p-6"
    >
      <div className="relative mx-auto w-20 h-20 mb-6">
        {/* Animated rings */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/20 to-blue-500/20 animate-pulse" />
        <div className="absolute inset-2 rounded-xl bg-gradient-to-br from-orange-500/30 to-blue-500/30 group-hover:scale-110 transition-transform duration-500" />
        
        {/* Icon container */}
        <div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-blue-900 to-blue-800 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-500">
          <Icon className="w-9 h-9 text-white" />
        </div>
      </div>

      <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-900 transition-colors">
        {title}
      </h4>
      <p className="text-slate-600 text-sm leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}