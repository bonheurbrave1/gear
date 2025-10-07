// src/pages/About/About.js
import React from 'react';
import { motion } from 'framer-motion';
import { HiCheck, HiUsers, HiShieldCheck, HiLightBulb } from 'react-icons/hi';
import { FaTrophy } from 'react-icons/fa';
const About = () => {
  const values = [
    {
      icon: HiShieldCheck,
      title: "Quality",
      description: "Uncompromising commitment to quality in every project we undertake."
    },
    {
      icon: HiLightBulb,
      title: "Innovation",
      description: "Embracing new technologies and methods to deliver better results."
    },
    {
      icon: HiUsers,
      title: "Collaboration",
      description: "Working closely with clients to understand and exceed their expectations."
    },
    {
      icon: FaTrophy,
      title: "Excellence",
      description: "Striving for excellence in every detail of our construction process."
    }
  ];

  const team = [
    {
      name: "John Anderson",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      experience: "20+ years"
    },
    {
      name: "Sarah Chen",
      role: "Chief Operations Officer",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      experience: "15+ years"
    },
    {
      name: "Mike Rodriguez",
      role: "Head of Construction",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      experience: "18+ years"
    },
    {
      name: "Emily Watson",
      role: "Project Director",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      experience: "12+ years"
    }
  ];

  const milestones = [
    { year: "2008", event: "GEAR Construction Founded" },
    { year: "2012", event: "First Major Commercial Project" },
    { year: "2015", event: "Expanded to Residential Construction" },
    { year: "2018", event: "Opened Regional Offices" },
    { year: "2020", event: "50+ Projects Completed" },
    { year: "2023", event: "Industry Excellence Award" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="pt-32"
    >
      {/* Header */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About GEAR
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 max-w-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            GEAR Construction LTD. is a limited liability company incorporated
in Rwanda under the company registration code 106638261 with
Rwanda Development Board (RDB).
</motion.p>
<motion.p
            className="text-xl text-gray-600 max-w-2xl pt-5"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
The company is involved in projects in Rwanda and is eyeing the
East African market especially DRC, Kenya and South Soudan. The
company has enjoyed steady growth over the years and can now
handle projects up to FRW 5 billion.
          </motion.p>
        </div>
      </section>

      {/* Values Section */}
<section className="py-20 bg-gray-50">
  <div className="container mx-auto px-6">
    <motion.div
      className="text-center mb-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Values</h2>
      <p className="text-gray-600 max-w-2xl mx-auto text-lg">
        The foundational principles that drive our commitment to excellence in construction management and design.
      </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Quality Excellence */}
      <motion.div
        className="text-center group cursor-pointer p-8 rounded-2xl bg-white hover:bg-blue-600 hover:text-white transition-all duration-500 border border-gray-100 shadow-lg"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="w-16 h-16 mx-auto mb-6 bg-blue-100 group-hover:bg-white rounded-full flex items-center justify-center">
          <i className="fas fa-award text-blue-600 group-hover:text-blue-600 text-2xl"></i>
        </div>
        <h3 className="text-2xl font-bold mb-4">Quality Excellence</h3>
        <p className="text-gray-600 group-hover:text-gray-100 text-base leading-relaxed mb-4">
          Setting benchmarks in construction quality, technology, and delivery while exceeding client expectations with superior workmanship.
        </p>
        <div className="mt-4 pt-4 border-t border-gray-200 group-hover:border-gray-400">
          <p className="text-sm text-gray-500 group-hover:text-gray-300">
            Nationally & internationally acknowledged quality standards
          </p>
        </div>
      </motion.div>

      {/* Health & Safety */}
      <motion.div
        className="text-center group cursor-pointer p-8 rounded-2xl bg-white hover:bg-green-600 hover:text-white transition-all duration-500 border border-gray-100 shadow-lg"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="w-16 h-16 mx-auto mb-6 bg-green-100 group-hover:bg-white rounded-full flex items-center justify-center">
          <i className="fas fa-shield-alt text-green-600 group-hover:text-green-600 text-2xl"></i>
        </div>
        <h3 className="text-2xl font-bold mb-4">Health & Safety</h3>
        <p className="text-gray-600 group-hover:text-gray-100 text-base leading-relaxed mb-4">
          Committed to providing safe working environments, equipment, and continuous improvement of safety protocols for all employees.
        </p>
        <div className="mt-4 pt-4 border-t border-gray-200 group-hover:border-gray-400">
          <p className="text-sm text-gray-500 group-hover:text-gray-300">
            Full compliance with health & safety legal requirements
          </p>
        </div>
      </motion.div>

      {/* Innovation & Development */}
      <motion.div
        className="text-center group cursor-pointer p-8 rounded-2xl bg-white hover:bg-purple-600 hover:text-white transition-all duration-500 border border-gray-100 shadow-lg"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="w-16 h-16 mx-auto mb-6 bg-purple-100 group-hover:bg-white rounded-full flex items-center justify-center">
          <i className="fas fa-lightbulb text-purple-600 group-hover:text-purple-600 text-2xl"></i>
        </div>
        <h3 className="text-2xl font-bold mb-4">Innovation & Development</h3>
        <p className="text-gray-600 group-hover:text-gray-100 text-base leading-relaxed mb-4">
          Exploring tremendous capabilities to surge new avenues of development while creating, building, and designing with perfection every time.
        </p>
        <div className="mt-4 pt-4 border-t border-gray-200 group-hover:border-gray-400">
          <p className="text-sm text-gray-500 group-hover:text-gray-300">
            Pushing company standards higher through innovation
          </p>
        </div>
      </motion.div>

      {/* Integrity & Ethics */}
      <motion.div
        className="text-center group cursor-pointer p-8 rounded-2xl bg-white hover:bg-amber-600 hover:text-white transition-all duration-500 border border-gray-100 shadow-lg"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="w-16 h-16 mx-auto mb-6 bg-amber-100 group-hover:bg-white rounded-full flex items-center justify-center">
          <i className="fas fa-handshake text-amber-600 group-hover:text-amber-600 text-2xl"></i>
        </div>
        <h3 className="text-2xl font-bold mb-4">Integrity & Ethics</h3>
        <p className="text-gray-600 group-hover:text-gray-100 text-base leading-relaxed mb-4">
          Honesty and integrity as underlying considerations on every project, maintaining business principles that ensure stellar reputation.
        </p>
        <div className="mt-4 pt-4 border-t border-gray-200 group-hover:border-gray-400">
          <p className="text-sm text-gray-500 group-hover:text-gray-300">
            High level of repeat business through ethical practices
          </p>
        </div>
      </motion.div>

      {/* Client Satisfaction */}
      <motion.div
        className="text-center group cursor-pointer p-8 rounded-2xl bg-white hover:bg-red-600 hover:text-white transition-all duration-500 border border-gray-100 shadow-lg"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="w-16 h-16 mx-auto mb-6 bg-red-100 group-hover:bg-white rounded-full flex items-center justify-center">
          <i className="fas fa-users text-red-600 group-hover:text-red-600 text-2xl"></i>
        </div>
        <h3 className="text-2xl font-bold mb-4">Client Satisfaction</h3>
        <p className="text-gray-600 group-hover:text-gray-100 text-base leading-relaxed mb-4">
          Completing projects to client and consultant satisfaction while remaining on budget and on time with unparalleled service.
        </p>
        <div className="mt-4 pt-4 border-t border-gray-200 group-hover:border-gray-400">
          <p className="text-sm text-gray-500 group-hover:text-gray-300">
            Determined to consistently exceed expectations
          </p>
        </div>
      </motion.div>

      {/* Perfection in Execution */}
      <motion.div
        className="text-center group cursor-pointer p-8 rounded-2xl bg-white hover:bg-indigo-600 hover:text-white transition-all duration-500 border border-gray-100 shadow-lg"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="w-16 h-16 mx-auto mb-6 bg-indigo-100 group-hover:bg-white rounded-full flex items-center justify-center">
          <i className="fas fa-hammer text-indigo-600 group-hover:text-indigo-600 text-2xl"></i>
        </div>
        <h3 className="text-2xl font-bold mb-4">Perfection in Execution</h3>
        <p className="text-gray-600 group-hover:text-gray-100 text-base leading-relaxed mb-4">
          From engineering concrete design mixes to superior finishes, we interpret and comply with all quality management requirements.
        </p>
        <div className="mt-4 pt-4 border-t border-gray-200 group-hover:border-gray-400">
          <p className="text-sm text-gray-500 group-hover:text-gray-300">
            Superior quality at the heart of everything we do
          </p>
        </div>
      </motion.div>
    </div>
  </div>
</section>
</motion.div>
  );
};

export default About;