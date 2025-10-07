// src/components/ProjectCategory/ProjectCategory.js
import React from 'react';

const ProjectCategory = ({ category, projects }) => {
  return (
    <div className="pt-52 bg-white py-8">
      <div className="container mx-auto px-4">
        {/* Category Header */}
        <div className="text-center mb-12">
          <h1 className="text-6xl text-left font-bold text-gray-900 mb-2">
            {category}
          </h1>
        </div>

        {/* Projects List */}
        <div className="space-y-12">
          {projects.map((project) => (
            <div key={project.id} className="border-b border-gray-200 pb-12">
              
              {/* Title Section */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h2>
                <p className="text-gray-600">
                  {project.location}
                </p>
              </div>

              {/* Images Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {project.images.map((image, imgIndex) => (
                  <div key={imgIndex}>
                    <img 
                      src={image} 
                      alt={`${project.title} - ${imgIndex + 1}`}
                      className="w-full h-48 object-cover rounded"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCategory;