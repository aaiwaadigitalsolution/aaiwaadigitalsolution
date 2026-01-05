import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code, Layout, Server, Smartphone, Box, Cloud, ShoppingCart,
  Cpu, Brain, MessageSquare, Radio, BarChart3, Blocks, Link,
  Wifi, Atom, Triangle, Layers, Zap, FileCode, Globe, Hexagon,
  Code2, Coffee, FileType, Rocket, Palette, Bird, Bot, Lightbulb,
  Component, Database, Flame, FileEdit, Leaf, CloudLightning,
  CloudCog, ShoppingBag, Store, Package, Building2, CloudRain
} from 'lucide-react';

export default function TechnologiesTabs() {
  const [activeTab, setActiveTab] = useState('emergingtech');

  const tabs = [
    { id: 'emergingtech', label: 'Emerging Tech' },
    { id: 'frontend', label: 'FrontEnd' },
    { id: 'backend', label: 'BackEnd' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'frameworks', label: 'Frameworks' },
    { id: 'cloud', label: 'Cloud' },
    { id: 'ecommerce', label: 'eCommerce' },
  ];

  const technologies = {
    emergingtech: [
      { name: 'Blockchain', icon: Link },
      { name: 'AI / ML', icon: Brain },
      { name: 'Chatbot', icon: MessageSquare },
      { name: 'IoT', icon: Wifi },
      { name: 'Data Analytics', icon: BarChart3 },
    ],
    frontend: [
      { name: 'React JS', icon: Atom },
      { name: 'Angular', icon: Triangle },
      { name: 'Vue JS', icon: Layers },
      { name: 'Next JS', icon: Zap },
      { name: 'TypeScript', icon: FileCode },
      { name: 'HTML5', icon: Globe },
    ],
    backend: [
      { name: 'Node JS', icon: Hexagon },
      { name: 'Python', icon: Code2 },
      { name: 'Java', icon: Coffee },
      { name: 'PHP', icon: FileType },
      { name: 'Go', icon: Rocket },
    ],
    mobile: [
      { name: 'React Native', icon: Atom },
      { name: 'Flutter', icon: Palette },
      { name: 'Swift', icon: Bird },
      { name: 'Kotlin', icon: Code },
      { name: 'iOS', icon: Smartphone },
      { name: 'Android', icon: Bot },
      { name: 'Ionic App', icon: Lightbulb },
      { name: 'Xamarin', icon: Component },
    ],
    frameworks: [
      { name: 'MERN', icon: Database },
      { name: 'MEAN', icon: Layers },
      { name: 'Laravel', icon: Flame },
      { name: 'CodeIgniter', icon: Cpu },
      { name: 'WordPress', icon: FileEdit },
      { name: 'Spring', icon: Leaf },
    ],
    cloud: [
      { name: 'AWS', icon: CloudLightning },
      { name: 'Microsoft Azure', icon: CloudCog },
      { name: 'Google Cloud', icon: CloudRain },
    ],
    ecommerce: [
      { name: 'Magento', icon: ShoppingBag },
      { name: 'Shopify', icon: ShoppingCart },
      { name: 'WooCommerce', icon: Store },
      { name: 'OpenCart', icon: Package },
      { name: 'Drupal', icon: Building2 },
    ],
  };

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Technologies &{' '}
            <span className="bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent font-bold">
              Platforms
            </span>{' '}
            We Work With
          </h2>
          <p className="text-lg text-slate-600">
            We leverage the latest technologies and industry-leading platforms to build 
            scalable, high-performance solutions tailored to your business needs.
          </p>
        </motion.div>

        {/* Tabs Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <div className="border-b border-slate-200 overflow-x-auto">
            <div className="flex flex-nowrap gap-2 min-w-max lg:min-w-0 lg:justify-center px-2 lg:px-0">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative px-6 py-4 font-semibold text-sm lg:text-base transition-all duration-300 whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'text-blue-900'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {tab.label}
                  
                  {/* Active Tab Indicator */}
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-900"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="min-h-[300px]"
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 lg:gap-8">
              {technologies[activeTab].map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="group flex flex-col items-center justify-center p-6 bg-white rounded-2xl border border-slate-200 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100/50 transition-all duration-300 cursor-pointer"
                >
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-xl bg-slate-100 group-hover:bg-blue-50 flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110">
                    <tech.icon className="w-8 h-8 text-slate-700 group-hover:text-blue-900 transition-colors duration-300" />
                  </div>
                  
                  {/* Technology Name */}
                  <h3 className="text-sm font-semibold text-slate-900 text-center group-hover:text-blue-900 transition-colors duration-300">
                    {tech.name}
                  </h3>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-slate-600">
            Looking for a technology not listed here?{' '}
            <a href="#contact" className="text-blue-900 font-semibold hover:underline">
              Let's discuss your specific requirements
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}