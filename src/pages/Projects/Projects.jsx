// src/pages/Projects/Projects.js (Updated)
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const categories = [
    'All', 'Commercial', 'Manufacturing', 'Industrial', 'Residential', 
    'Sports & Leisure', 'Warehousing', 'Workshops', 'Auto Dealerships',
    'Food & Beverage', 'Logistic Areas', 'Retail', 'Agriculture',
    'Aviation', 'Education', 'Hospitality & Leisure', 'Others'
  ];
  
  const projects = [
    {
      id: 1,
      title: "Skyline Office Tower",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      year: "2024",
      location: "New York, NY"
    },
    {
      id: 2,
      title: "Modern Manufacturing Plant",
      category: "Manufacturing",
      image: "https://images.unsplash.com/photo-1581093458791-8a6b22b6d334?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      year: "2023",
      location: "Detroit, MI"
    },
    {
      id: 3,
      title: "Industrial Complex",
      category: "Industrial",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      year: "2023",
      location: "Chicago, IL"
    },
    {
      id: 4,
      title: "Luxury Residential Tower",
      category: "Residential",
      image: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      year: "2023",
      location: "Miami, FL"
    },
    {
      id: 5,
      title: "Sports Arena Complex",
      category: "Sports & Leisure",
      image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      year: "2022",
      location: "Los Angeles, CA"
    },
    {
      id: 6,
      title: "Distribution Warehouse",
      category: "Warehousing",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      year: "2022",
      location: "Dallas, TX"
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

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
            Our Projects
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 max-w-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Explore our diverse portfolio across various sectors and project types.
          </motion.p>
        </div>
      </section>

      {/* Category Grid */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold mb-6">Project Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.filter(cat => cat !== 'All').map((category) => (
              <Link
                key={category}
                to={`/projects/${category.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
                className="group"
              >
                <motion.div
                  className="p-4 bg-gray-50 rounded-xl text-center hover:bg-black hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <h3 className="font-medium text-sm group-hover:text-white">
                    {category}
                  </h3>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-y border-gray-200">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-4">
            {categories.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-black text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="group cursor-pointer"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="relative overflow-hidden bg-gray-100 aspect-[4/3] mb-4 rounded-2xl">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-gray-600 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>{project.category}</span>
                      <span>{project.year}</span>
                    </div>
                    <p className="text-gray-400 text-sm mt-1">{project.location}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </motion.div>
  );
};

export default Projects;