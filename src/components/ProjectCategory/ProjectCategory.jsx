// src/components/ProjectCategory/ProjectCategory.js
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi';

const ProjectCategory = ({ category, description, projects }) => {
  const allCategories = [
    'commercial', 'manufacturing', 'industrial', 'residential', 
    'sports-leisure', 'warehousing', 'workshops', 'auto-dealerships',
    'food-beverage', 'logistic-areas', 'retail', 'agriculture',
    'aviation', 'education', 'hospitality-leisure', 'others'
  ];

  const currentIndex = allCategories.indexOf(category);
  const nextCategory = allCategories[(currentIndex + 1) % allCategories.length];
  const prevCategory = allCategories[(currentIndex - 1 + allCategories.length) % allCategories.length];

  const categoryTitles = {
    commercial: "Commercial Projects",
    manufacturing: "Manufacturing Facilities",
    industrial: "Industrial Complexes",
    residential: "Residential Developments",
    'sports-leisure': "Sports & Leisure Facilities",
    warehousing: "Warehousing Solutions",
    workshops: "Workshop Spaces",
    'auto-dealerships': "Auto Dealerships",
    'food-beverage': "Food & Beverage Establishments",
    'logistic-areas': "Logistics Areas",
    retail: "Retail Spaces",
    agriculture: "Agricultural Facilities",
    aviation: "Aviation Infrastructure",
    education: "Educational Institutions",
    'hospitality-leisure': "Hospitality & Leisure",
    others: "Other Projects"
  };

  const categoryDescriptions = {
    commercial: "State-of-the-art commercial spaces including office buildings, business parks, and corporate campuses designed for modern business needs.",
    manufacturing: "Advanced manufacturing facilities and production plants built for efficiency, safety, and scalability.",
    industrial: "Robust industrial complexes and processing plants engineered for heavy-duty operations and long-term reliability.",
    residential: "Luxury residential developments and communities that combine aesthetic appeal with functional living spaces.",
    'sports-leisure': "World-class sports arenas, recreational facilities, and leisure complexes for community and professional use.",
    warehousing: "Modern warehousing and distribution centers optimized for logistics, storage, and supply chain efficiency.",
    workshops: "Specialized workshop spaces and technical facilities designed for various trades and manufacturing processes.",
    'auto-dealerships': "Contemporary automotive dealerships and service centers with premium customer experience in mind.",
    'food-beverage': "Restaurants, cafes, and food processing facilities meeting the highest standards of hygiene and efficiency.",
    'logistic-areas': "Comprehensive logistics hubs and distribution parks built for seamless supply chain operations.",
    retail: "Innovative retail spaces and shopping environments that enhance customer experience and commercial success.",
    agriculture: "Agricultural facilities and processing plants supporting modern farming and food production.",
    aviation: "Aviation infrastructure including hangars, maintenance facilities, and airport terminals.",
    education: "Educational campuses and learning institutions fostering optimal environments for teaching and learning.",
    'hospitality-leisure': "Hotels, resorts, and leisure facilities offering exceptional guest experiences and operational excellence.",
    others: "Specialized construction projects that demonstrate our versatility and innovative approach to building solutions."
  };

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
          <div className="flex items-center justify-between mb-6">
            <Link
              to="/projects"
              className="inline-flex items-center text-gray-600 hover:text-black transition-colors duration-300 group"
            >
              <HiArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
              Back to All Projects
            </Link>
            
            <div className="flex items-center space-x-4">
              <Link
                to={`/projects/${prevCategory}`}
                className="inline-flex items-center text-gray-600 hover:text-black transition-colors duration-300 group"
              >
                <HiArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
                Previous
              </Link>
              <Link
                to={`/projects/${nextCategory}`}
                className="inline-flex items-center text-gray-600 hover:text-black transition-colors duration-300 group"
              >
                Next
                <HiArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {categoryTitles[category]}
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {categoryDescriptions[category]}
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-black text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl md:text-4xl font-bold mb-2">{projects.length}+</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">Projects</div>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl md:text-4xl font-bold mb-2">15+</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">Years Experience</div>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl md:text-4xl font-bold mb-2">98%</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">Client Satisfaction</div>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl md:text-4xl font-bold mb-2">50M+</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">Square Feet</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="relative overflow-hidden bg-gray-100 aspect-[4/3] mb-4 rounded-2xl">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
                  
                  {/* Year Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                    {project.year}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-gray-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 mb-2">{project.location}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Project Features */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Start Your {categoryTitles[category].replace('Projects', 'Project')}
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Ready to bring your vision to life? Contact us to discuss your project requirements and get started.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors duration-300"
              >
                Start Your Project
                <HiArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border-2 border-black text-black rounded-full font-medium hover:bg-black hover:text-white transition-all duration-300"
              >
                Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default ProjectCategory;