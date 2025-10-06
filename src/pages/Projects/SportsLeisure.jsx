// src/pages/Projects/SportsLeisure.js
import React from 'react';
import ProjectCategory from '../../components/ProjectCategory/ProjectCategory';

const SportsLeisure = () => {
  const projects = [
    {
      id: 1,
      title: "Multi-Purpose Sports Arena",
      image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      year: "2024",
      location: "Los Angeles, CA",
      description: "20,000-seat multi-purpose arena for sports, concerts, and entertainment events.",
      features: ["Multi-Purpose", "20,000 Capacity", "Premium Suites"]
    },
    {
      id: 2,
      title: "Community Recreation Center",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      year: "2023",
      location: "Portland, OR",
      description: "Comprehensive community center with pools, gyms, and recreational facilities.",
      features: ["Community Focus", "Multiple Facilities", "Accessible Design"]
    },
    {
      id: 3,
      title: "Professional Training Facility",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      year: "2023",
      location: "Orlando, FL",
      description: "State-of-the-art training facility for professional athletes and teams.",
      features: ["Professional Grade", "Sports Science", "Recovery Facilities"]
    }
  ];

  return <ProjectCategory category="sports-leisure" projects={projects} />;
};

export default SportsLeisure;