// src/pages/Projects/Commercial.js
import React from 'react';
import ProjectCategory from '../../components/ProjectCategory/ProjectCategory';

const Commercial = () => {
  const projects = [
    {
      id: 1,
      title: "Skyline Office Tower",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      year: "2024",
      location: "New York, NY",
      description: "45-story premium office tower with state-of-the-art facilities and sustainable design features.",
      features: ["LEED Certified", "Smart Building", "Premium Amenities"]
    },
    {
      id: 2,
      title: "Metro Business Park",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      year: "2023",
      location: "Chicago, IL",
      description: "Mixed-use business park featuring office spaces, retail areas, and conference facilities.",
      features: ["Mixed-Use", "Conference Center", "Retail Spaces"]
    },
    {
      id: 3,
      title: "Financial District Complex",
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      year: "2023",
      location: "San Francisco, CA",
      description: "Modern commercial complex in the heart of the financial district with premium finishes.",
      features: ["Premium Location", "High-Speed Connectivity", "Security Systems"]
    },
    {
      id: 4,
      title: "Corporate Campus",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      year: "2022",
      location: "Austin, TX",
      description: "Sprawling corporate campus with multiple buildings and extensive recreational facilities.",
      features: ["Campus Design", "Recreational Areas", "Sustainable Design"]
    },
    {
      id: 5,
      title: "Downtown Retail Plaza",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      year: "2022",
      location: "Miami, FL",
      description: "Luxury retail and dining destination with innovative architectural design.",
      features: ["Luxury Retail", "Dining Options", "Architectural Design"]
    },
    {
      id: 6,
      title: "Tech Innovation Center",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      year: "2021",
      location: "Seattle, WA",
      description: "Cutting-edge technology center designed for innovation and collaboration.",
      features: ["Innovation Labs", "Collaborative Spaces", "Advanced IT"]
    }
  ];

  return <ProjectCategory category="commercial" projects={projects} />;
};

export default Commercial;