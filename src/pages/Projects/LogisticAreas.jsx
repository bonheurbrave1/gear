// src/pages/Projects/LogisticAreas.js
import React from 'react';
import ProjectCategory from '../../components/ProjectCategory/ProjectCategory';

const LogisticAreas = () => {
  const projects = [
    {
      id: 1,
      title: "Intermodal Logistics Park",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      year: "2024",
      location: "Kansas City, MO",
      description: "Multi-modal logistics park connecting rail, truck, and air freight operations.",
      features: ["Multi-Modal", "Rail Access", "Truck Terminals"]
    },
    {
      id: 2,
      title: "Air Cargo Terminal",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      year: "2023",
      location: "Memphis, TN",
      description: "Modern air cargo terminal with cold storage and specialized handling equipment.",
      features: ["Air Cargo", "Cold Storage", "Specialized Handling"]
    },
    {
      id: 3,
      title: "Port Logistics Center",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      year: "2023",
      location: "Long Beach, CA",
      description: "Port-side logistics facility with container handling and customs clearance areas.",
      features: ["Port Access", "Container Handling", "Customs Areas"]
    },
    {
      id: 4,
      title: "Last-Mile Delivery Hub",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      year: "2022",
      location: "Philadelphia, PA",
      description: "Urban logistics hub optimized for last-mile delivery and e-commerce operations.",
      features: ["Last-Mile Focus", "Urban Location", "E-commerce Ready"]
    },
    {
      id: 5,
      title: "Rail Distribution Yard",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      year: "2022",
      location: "Omaha, NE",
      description: "Rail-served distribution yard with transload facilities and storage areas.",
      features: ["Rail Served", "Transload Facilities", "Storage Areas"]
    },
    {
      id: 6,
      title: "Cross-Border Logistics Facility",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      year: "2021",
      location: "Laredo, TX",
      description: "Specialized logistics center for cross-border trade with customs brokerage.",
      features: ["Cross-Border", "Customs Brokerage", "Trade Services"]
    }
  ];

  return <ProjectCategory category="logistic-areas" projects={projects} />;
};

export default LogisticAreas;