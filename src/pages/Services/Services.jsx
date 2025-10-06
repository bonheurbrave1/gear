// src/pages/Services/Services.js
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiCheck, HiArrowRight, HiPlay, HiLightBulb } from 'react-icons/hi';

const Services = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: 1,
      title: "Commercial Construction",
      description: "Complete commercial construction services from concept to completion for office buildings, retail spaces, and mixed-use developments.",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      features: [
        "Office Building Construction",
        "Retail & Commercial Spaces",
        "Mixed-Use Developments",
        "Project Management",
        "Quality Assurance"
      ],
      stats: { projects: "25+", experience: "15 years" }
    },
    {
      id: 2,
      title: "Residential Construction",
      description: "Luxury residential projects including custom homes, apartment complexes, and residential communities with attention to detail.",
      image: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      features: [
        "Custom Home Building",
        "Apartment Complexes",
        "Residential Communities",
        "Interior Finishing",
        "Landscape Integration"
      ],
      stats: { projects: "40+", experience: "12 years" }
    },
    {
      id: 3,
      title: "Renovation & Restoration",
      description: "Transforming existing spaces through careful renovation and restoration while preserving architectural integrity.",
      image: "https://images.unsplash.com/photo-1503387769-00ec6e16d001?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      features: [
        "Historical Restoration",
        "Modern Renovations",
        "Structural Upgrades",
        "Energy Efficiency",
        "Code Compliance"
      ],
      stats: { projects: "35+", experience: "10 years" }
    },
    {
      id: 4,
      title: "Construction Consulting",
      description: "Expert consulting services for project planning, feasibility studies, and construction management.",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      features: [
        "Project Planning",
        "Feasibility Studies",
        "Cost Estimation",
        "Risk Assessment",
        "Quality Control"
      ],
      stats: { projects: "60+", experience: "8 years" }
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Consultation & Planning",
      description: "Initial meeting to understand your vision and requirements"
    },
    {
      step: "02",
      title: "Design & Development",
      description: "Creating detailed plans and 3D visualizations"
    },
    {
      step: "03",
      title: "Construction & Execution",
      description: "On-site construction with quality control"
    },
    {
      step: "04",
      title: "Completion & Handover",
      description: "Final inspection and project delivery"
    }
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
            Our Services
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 max-w-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Comprehensive construction solutions tailored to meet your unique requirements with precision and excellence.
          </motion.p>
        </div>
      </section>

      {/* Services Showcase */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Service List */}
            <div className="space-y-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  className={`p-6 rounded-2xl cursor-pointer transition-all duration-500 ${
                    activeService === index 
                      ? 'bg-black text-white shadow-2xl' 
                      : 'bg-gray-50 hover:bg-gray-100'
                  }`}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setActiveService(index)}
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className={`text-2xl font-semibold ${
                      activeService === index ? 'text-white' : 'text-black'
                    }`}>
                      {service.title}
                    </h3>
                    <motion.div
                      animate={{ rotate: activeService === index ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <HiArrowRight className={`w-6 h-6 ${
                        activeService === index ? 'text-white' : 'text-gray-400'
                      }`} />
                    </motion.div>
                  </div>
                  <p className={`mb-4 ${
                    activeService === index ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {service.description}
                  </p>
                  <div className="flex gap-4 text-sm">
                    <span className={`px-3 py-1 rounded-full ${
                      activeService === index 
                        ? 'bg-white text-black' 
                        : 'bg-black text-white'
                    }`}>
                      {service.stats.projects} Projects
                    </span>
                    <span className={`px-3 py-1 rounded-full ${
                      activeService === index 
                        ? 'bg-white text-black' 
                        : 'bg-gray-200 text-gray-700'
                    }`}>
                      {service.stats.experience}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Active Service Details */}
            <div className="sticky top-32">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-8"
                >
                  <div className="relative overflow-hidden rounded-2xl bg-gray-100 aspect-[4/3]">
                    <motion.img
                      src={services[activeService].image}
                      alt={services[activeService].title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.7 }}
                    />
                  </div>
                  
                  <div className="space-y-6">
                    <h3 className="text-3xl font-semibold">
                      {services[activeService].title}
                    </h3>
                    
                    <ul className="space-y-3">
                      {services[activeService].features.map((feature, index) => (
                        <motion.li
                          key={feature}
                          className="flex items-center space-x-3"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                          <HiCheck className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center px-8 py-4 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors duration-300"
                    >
                      Start Your Project
                      <HiArrowRight className="ml-2 w-5 h-5" />
                    </motion.button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A structured approach to ensure every project meets our high standards of quality and client satisfaction.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                className="text-center group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto group-hover:bg-gray-800 transition-colors duration-300">
                    <span className="text-white text-2xl font-bold">{step.step}</span>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-1/2 w-full h-0.5 bg-gray-300 transform translate-x-10"></div>
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <HiLightBulb className="w-16 h-16 mx-auto mb-6 text-gray-400" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Let's discuss your construction needs and bring your vision to life with our expert team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-gray-100 transition-colors duration-300"
              >
                Get Free Consultation
                <HiArrowRight className="ml-2 w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-full font-medium hover:bg-white hover:text-black transition-all duration-300"
              >
                <HiPlay className="mr-2 w-5 h-5" />
                Watch Our Story
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;