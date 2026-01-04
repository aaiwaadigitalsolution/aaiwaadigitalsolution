import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-2xl p-8 shadow-xl text-center border border-slate-100"
      >
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
        <p className="text-slate-600">Thank you for reaching out. Our team will get back to you within 24 hours.</p>
        <button 
          onClick={() => setSubmitted(false)}
          className="mt-6 text-blue-600 font-semibold hover:underline"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-xl border border-slate-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
          <input 
            type="text" 
            required
            placeholder="John Doe"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
          <input 
            type="email" 
            required
            placeholder="john@example.com"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
          />
        </div>
      </div>
      
      <div className="mb-6">
        <label className="block text-sm font-semibold text-slate-700 mb-2">Subject</label>
        <input 
          type="text" 
          placeholder="Web Development Project"
          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
        />
      </div>

      <div className="mb-6">
        <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
        <textarea 
          required
          placeholder="Tell us about your project goals..."
          rows="4"
          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
        ></textarea>
      </div>

      <button 
        type="submit" 
        disabled={isSubmitting}
        className="w-full py-4 bg-gradient-to-r from-blue-900 to-blue-700 text-white font-bold rounded-xl shadow-lg hover:shadow-blue-900/30 transition-all flex items-center justify-center gap-2 disabled:opacity-70"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send Message
            <Send className="w-5 h-5" />
          </>
        )}
      </button>
    </form>
  );
}