import React from "react";
import { motion } from "framer-motion";
import ContactForm from "@/components/forms/ContactForm";
import ContactNumberBrand from "@/components/ContactNumberBrand";

import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
} from "lucide-react";

export default function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 70962 24922"],
      action: "tel:+917096224922",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@aaiwaa.com", "support@aaiwaa.com"],
      action: "mailto:info@aaiwaa.com",
    },
    {
      icon: MapPin,
      title: "Office",
      details: [
        { type: "heading", text: "BRANCH 1 (MAIN BRANCH)" },
        { type: "text", text: "614 , MBC , Mota Varachha" },
        { type: "text", text: "Surat , Gujarat India 394101" },
        { type: "space" },
        { type: "heading", text: "BRANCH 2" },
        {
          type: "text",
          text: "6th floor, office no 11, AL Abbas Building 2, Bur Dubai - Dubai",
        },
      ],
      action: null,
    },

    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Sat: 9:00 AM - 6:00 PM", "Sun: 10:00 AM - 2:00 PM"],
      action: null,
    },
  ];

  const socialLinks = [
    // {
    //   icon: Linkedin,
    //   href: "#",
    //   label: "LinkedIn",
    //   color: "hover:bg-blue-600",
    // },
    // { icon: Twitter, href: "#", label: "Twitter", color: "hover:bg-sky-500" },
    {
      icon: Facebook,
      href: "https://www.facebook.com/profile.php?id=61586364833341",
      label: "Facebook",
      color: "hover:bg-blue-700",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/aaiwaadigital/",
      label: "Instagram",
      color: "hover:bg-pink-600",
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-orange-500/20 blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-6 backdrop-blur-sm">
                <MessageCircle className="w-4 h-4" />
                Get in Touch
              </span>
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Let's Start a
                <span className="bg-gradient-to-r from-orange-400 to-orange-300 bg-clip-text text-transparent">
                  {" "}
                  Conversation
                </span>
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                Have a project in mind? We'd love to hear about it. Reach out
                and let's discuss how we can help transform your business.
              </p>
              <div className="mt-8 flex justify-center">
                <ContactNumberBrand />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
                  Contact Information
                </h2>
                <p className="text-slate-600 mb-8">
                  Ready to take your business to the next level? Reach out to us
                  through any of these channels.
                </p>
              </motion.div>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-900 to-blue-800 flex items-center justify-center flex-shrink-0 shadow-lg">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">
                        {item.title}
                      </h3>
                      {item.details.map((detail, i) => {
                        // Office details object format handle
                        if (typeof detail === "object") {
                          if (detail.type === "space") {
                            return <div key={i} className="h-2" />;
                          }

                          if (detail.type === "heading") {
                            return (
                              <p key={i} className="font-bold text-slate-900">
                                {detail.text}
                              </p>
                            );
                          }

                          return (
                            <p key={i} className="text-slate-600">
                              {detail.text}
                            </p>
                          );
                        }

                        // Normal string format (other fields)
                        return item.action ? (
                          <a
                            key={i}
                            href={item.action}
                            className="block text-slate-600 hover:text-blue-600 transition-colors"
                          >
                            {detail}
                          </a>
                        ) : (
                          <p key={i} className="text-slate-600">
                            {detail}
                          </p>
                        );
                      })}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
            </div>

            {/* Contact Form */}
          
            <div className="lg:col-span-3 self-start lg:sticky lg:top-24">
              <ContactForm />
            </div>
          </div>

          {/* Social Links - Center Full Width */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-10 flex flex-col items-center"
          >
            {/* LINE HERE */}
            <div className="w-full max-w-7xl border-t border-slate-200 mb-6"></div>

            <h3 className="font-semibold text-slate-900 mb-4 text-center">
              Follow Us
            </h3>

            <div className="flex justify-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center transition-all duration-300 ${social.color} hover:text-white`}
                >
                  <social.icon className="w-7 h-7" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative h-[400px] lg:h-[500px] bg-slate-200">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-transparent z-10 h-20" />

        {/* Map placeholder with styled overlay */}
        <div className="absolute inset-0 bg-slate-300">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.441635898851!2d72.8844426!3d21.238754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f40eacb8b3d%3A0x5dd425eaf9ff081c!2sMBC%20-%20Meridian%20Business%20Center!5e0!3m2!1sen!2sin!4v1700000000000"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="AAIWAA Digital Solution Location"
            className="grayscale hover:grayscale-0 transition-all duration-500"
          />
        </div>

        {/* Location Card Overlay */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="absolute bottom-8 left-4 lg:left-8 z-20"
        >
          <div className="bg-white rounded-2xl p-6 shadow-xl max-w-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">
                  AAIWAA Digital Solution
                </h3>
                <p className="text-sm text-slate-600">
                  614 MBC(Meridian Business Center) , <br />
                  Lajamani Chowk , Mota Varachaa , Surat , Gujarat ,
                  India-394101
                </p>
                <a
                  href="https://www.google.com/maps"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                >
                  Get Directions →
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold mb-4">
              FAQ
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                q: "How quickly can you start on my project?",
                a: "We typically begin new projects within 1-2 weeks of signing the agreement. For urgent requirements, we can expedite the process.",
              },
              {
                q: "What is your typical project timeline?",
                a: "Project timelines vary based on complexity. A simple website takes 2-4 weeks, while complex applications may take 2-3 months. We provide detailed timelines during the proposal stage.",
              },
              {
                q: "Do you offer ongoing support after project completion?",
                a: "Yes! We offer various maintenance and support packages to ensure your digital assets continue to perform optimally.",
              },
              {
                q: "How do you measure the success of marketing campaigns?",
                a: "We track KPIs including traffic, conversions, ROI, engagement rates, and more. You receive regular reports with detailed analytics and insights.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-50 rounded-2xl p-6"
              >
                <h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3>
                <p className="text-slate-600">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
