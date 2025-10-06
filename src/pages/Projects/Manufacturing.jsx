// src/pages/Projects/Manufacturing.js
import React from 'react';
import ProjectCategory from '../../components/ProjectCategory/ProjectCategory';

const Manufacturing = () => {
  const projects = [
    {
      id: 1,
      title: "Advanced Automotive Plant",
      image: "https://images.unsplash.com/photo-1581093458791-8a6b22b6d334?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      year: "2024",
      location: "Detroit, MI",
      description: "State-of-the-art automotive manufacturing facility with automated production lines.",
      features: ["Automation", "Quality Control", "Sustainable"]
    },
    {
      id: 2,
      title: "Electronics Manufacturing Hub",
      image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      year: "2023",
      location: "San Jose, CA",
      description: "Clean room manufacturing facility for high-precision electronic components.",
      features: ["Clean Rooms", "Precision Manufacturing", "ESD Protection"]
    },
    {
      id: 3,
      title: "Pharmaceutical Production Facility",
      image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      year: "2023",
      location: "Boston, MA",
      description: "GMP-compliant pharmaceutical manufacturing plant with advanced quality systems.",
      features: ["GMP Compliant", "Quality Systems", "Research Labs"]
    }
  ];

  return <ProjectCategory category="manufacturing" projects={projects} />;
};

export default Manufacturing;