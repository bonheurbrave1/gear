// src/pages/Projects/Industrial.js
import React from 'react';
import ProjectCategory from '../../components/ProjectCategory/ProjectCategory';

const Industrial = () => {
  const projects = [
    {
      id: 1,
      title: "Heavy Industrial Complex",
      image: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      year: "2024",
      location: "Pittsburgh, PA",
      description: "Comprehensive industrial complex for heavy manufacturing and processing operations.",
      features: ["Heavy Duty", "Processing", "Safety Systems"]
    },
    {
      id: 2,
      title: "Chemical Processing Plant",
      image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      year: "2023",
      location: "Houston, TX",
      description: "Specialized chemical processing facility with advanced safety and containment systems.",
      features: ["Chemical Processing", "Safety Systems", "Containment"]
    },
    {
      id: 3,
      title: "Steel Production Facility",
      image: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      year: "2022",
      location: "Cleveland, OH",
      description: "Modern steel production plant with efficient processing and environmental controls.",
      features: ["Steel Production", "Efficient Processing", "Environmental Controls"]
    }
  ];

  return <ProjectCategory category="industrial" projects={projects} />;
};

export default Industrial;