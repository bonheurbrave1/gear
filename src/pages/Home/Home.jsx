// src/pages/Home/Home.js
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiArrowRight, HiPlay } from 'react-icons/hi';
import industrial from "../../assets/projects/industrial.png"
const Home = () => {
  const featuredProjects = [
    {
      id: 1,
      title: "Modern Commercial Complex",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      year: "2024"
    },
    {
      id: 2,
      title: "Luxury Residential Tower",
      category: "Residential",
      image: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      year: "2023"
    },
    {
      id: 3,
      title: "Industrial Facility",
      category: "Industrial",
      image: industrial,
      year: "2023"
    }
  ];

  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: new Date().getFullYear() - 2008, label: "Years Experience" },
    { number: "100+", label: "Team Members" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80")',
          }}
        />
        
        <div className="absolute inset-0 bg-black/50" />
        
        <div className="relative z-10 text-center text-white px-6 max-w-6xl mx-auto">
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6 tracking-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            GEAR
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Building the future with precision, quality, and innovation in construction
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <Link
              to="/projects"
              className="inline-flex items-center px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-gray-100 transition-all duration-300 group text-lg"
            >
              View Our Work
              <HiArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            
            <button className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-medium rounded-full hover:bg-white hover:text-black transition-all duration-300 group text-lg">
              <HiPlay className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              Watch Showreel
            </button>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            className="flex flex-col items-center text-white"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-sm mb-2">Scroll</span>
            <div className="w-px h-12 bg-white"></div>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-gray-400 text-sm uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            className="flex justify-between items-end mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
              <p className="text-gray-600 max-w-2xl">
                Discover our portfolio of exceptional construction projects that showcase our commitment to excellence
              </p>
            </div>
            <Link
              to="/projects"
              className="hidden md:flex items-center text-black hover:text-gray-600 transition-colors duration-300 group"
            >
              View All
              <HiArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="relative overflow-hidden bg-gray-100 aspect-[4/5] mb-4">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
                </div>
                
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold mb-1 group-hover:text-gray-600 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-500 text-sm">{project.category}</p>
                  </div>
                  <span className="text-gray-400 text-sm">{project.year}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile View All Button */}
          <div className="mt-12 text-center md:hidden">
            <Link
              to="/projects"
              className="inline-flex items-center px-6 py-3 border border-black text-black font-medium rounded-full hover:bg-black hover:text-white transition-all duration-300 group"
            >
              View All Projects
              <HiArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive construction solutions tailored to meet your unique requirements
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Construction', 'Renovation', 'Consulting'].map((service, index) => (
              <motion.div
                key={service}
                className="text-center group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gray-800 transition-colors duration-300">
                  <HiArrowRight className="w-8 h-8 text-white transform -rotate-45" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service}</h3>
                <p className="text-gray-600">
                  Professional {service.toLowerCase()} services with attention to detail and quality craftsmanship.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;