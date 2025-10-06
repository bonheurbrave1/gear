// src/pages/Projects/Warehousing.js
import React from 'react';
import ProjectCategory from '../../components/ProjectCategory/ProjectCategory';

const Warehousing = () => {
  const projects = [
    {
      id: 1,
      title: "Regional Distribution Center",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      year: "2024",
      location: "Memphis, TN",
      description: "500,000 sq ft regional distribution center with advanced automation and logistics systems.",
      features: ["Automated Systems", "Climate Control", "Security Systems"]
    },
    {
      id: 2,
      title: "Cold Storage Facility",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      year: "2023",
      location: "Chicago, IL",
      description: "Temperature-controlled warehouse for perishable goods with -20°C freezing capabilities.",
      features: ["Temperature Control", "Food Grade", "Energy Efficient"]
    },
    {
      id: 3,
      title: "E-commerce Fulfillment Center",
      image: "https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      year: "2023",
      location: "Reno, NV",
      description: "Modern fulfillment center designed for high-volume e-commerce operations with robotic automation.",
      features: ["Robotic Automation", "High Volume", "Order Processing"]
    },
    {
      id: 4,
      title: "Bulk Storage Warehouse",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      year: "2022",
      location: "Houston, TX",
      description: "Heavy-duty warehouse for bulk material storage with specialized handling equipment.",
      features: ["Bulk Storage", "Heavy Duty", "Material Handling"]
    },
    {
      id: 5,
      title: "Cross-Dock Facility",
      image: "https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      year: "2022",
      location: "Louisville, KY",
      description: "Efficient cross-dock warehouse minimizing storage time and optimizing logistics flow.",
      features: ["Cross-Dock Design", "Fast Turnaround", "Logistics Optimization"]
    },
    {
      id: 6,
      title: "Automated Storage System",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      year: "2021",
      location: "Columbus, OH",
      description: "Fully automated high-bay warehouse with robotic retrieval and inventory management systems.",
      features: ["High-Bay Design", "Robotic Retrieval", "Inventory Management"]
    }
  ];

  return <ProjectCategory category="warehousing" projects={projects} />;
};

export default Warehousing;