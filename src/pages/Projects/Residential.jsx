// src/pages/Projects/Residential.js
import React from 'react';
import ProjectCategory from '../../components/ProjectCategory/ProjectCategory';

const Residential = () => {
  const projects = [
    {
      id: 1,
      title: "Luxury Condominium Tower",
      image: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      year: "2024",
      location: "Miami, FL",
      description: "55-story luxury condominium with panoramic views and premium amenities.",
      features: ["Luxury Finishes", "Panoramic Views", "Premium Amenities"]
    },
    {
      id: 2,
      title: "Suburban Community Development",
      image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      year: "2023",
      location: "Austin, TX",
      description: "Master-planned community with single-family homes and community facilities.",
      features: ["Master-Planned", "Community Facilities", "Green Spaces"]
    },
    {
      id: 3,
      title: "Urban Apartment Complex",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      year: "2023",
      location: "Denver, CO",
      description: "Mixed-income apartment complex in urban center with modern amenities.",
      features: ["Mixed-Income", "Urban Location", "Modern Amenities"]
    }
  ];

  return <ProjectCategory category="residential" projects={projects} />;
};

export default Residential;