// src/pages/Projects/AutoDealerships.js
import React from 'react';
import ProjectCategory from '../../components/ProjectCategory/ProjectCategory';

const AutoDealerships = () => {
  const projects = [
    {
      id: 1,
      title: "Luxury Automotive Campus",
      image: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      year: "2024",
      location: "Beverly Hills, CA",
      description: "Premium luxury car dealership with showroom, service center, and customer lounge.",
      features: ["Luxury Showroom", "Service Center", "Customer Lounge"]
    },
    {
      id: 2,
      title: "Multi-Brand Dealership Complex",
      image: "https://images.unsplash.com/photo-1603587070813-bb890e6d3856?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      year: "2023",
      location: "Miami, FL",
      description: "Large automotive complex housing multiple brands with separate showrooms and service areas.",
      features: ["Multiple Brands", "Separate Showrooms", "Unified Service"]
    },
    {
      id: 3,
      title: "Electric Vehicle Center",
      image: "https://images.unsplash.com/photo-1593941707882-a5bba5339f2a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      year: "2023",
      location: "Seattle, WA",
      description: "Specialized EV dealership with charging infrastructure and technology showcase.",
      features: ["EV Charging", "Technology Showcase", "Battery Service"]
    },
    {
      id: 4,
      title: "Commercial Truck Dealership",
      image: "https://images.unsplash.com/photo-1603587070813-bb890e6d3856?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      year: "2022",
      location: "Detroit, MI",
      description: "Heavy-duty truck dealership with large service bays and parts department.",
      features: ["Heavy-Duty Bays", "Parts Department", "Fleet Services"]
    },
    {
      id: 5,
      title: "Pre-Owned Vehicle Superstore",
      image: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      year: "2022",
      location: "Atlanta, GA",
      description: "Large pre-owned vehicle facility with reconditioning center and extensive inventory.",
      features: ["Reconditioning Center", "Large Inventory", "Quality Assurance"]
    },
    {
      id: 6,
      title: "Motorcycle & Powersports Dealership",
      image: "https://images.unsplash.com/photo-1603587070813-bb890e6d3856?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      year: "2021",
      location: "Denver, CO",
      description: "Specialized dealership for motorcycles, ATVs, and powersports vehicles.",
      features: ["Powersports Focus", "Service Department", "Accessories Showroom"]
    }
  ];

  return <ProjectCategory category="auto-dealerships" projects={projects} />;
};

export default AutoDealerships;