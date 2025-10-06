// src/pages/Projects/HospitalityLeisure.js
import React from 'react';
import ProjectCategory from '../../components/ProjectCategory/ProjectCategory';

const HospitalityLeisure = () => {
  const projects = [
    {
      id: 1,
      title: "Luxury Resort & Spa",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      year: "2024",
      location: "Maui, HI",
      description: "5-star luxury resort with spa, multiple pools, and premium accommodations.",
      features: ["Luxury Accommodations", "Spa Facilities", "Multiple Pools"]
    },
    {
      id: 2,
      title: "Conference Center Hotel",
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      year: "2023",
      location: "Orlando, FL",
      description: "Large conference hotel with meeting spaces, ballrooms, and business facilities.",
      features: ["Conference Spaces", "Ballrooms", "Business Facilities"]
    },
    {
      id: 3,
      title: "Boutique City Hotel",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      year: "2023",
      location: "New Orleans, LA",
      description: "Design-focused boutique hotel in historic district with unique character.",
      features: ["Boutique Design", "Historic District", "Unique Character"]
    },
    {
      id: 4,
      title: "Golf Clubhouse & Resort",
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      year: "2022",
      location: "Palm Springs, CA",
      description: "Premium golf clubhouse with pro shop, dining, and resort accommodations.",
      features: ["Golf Facilities", "Pro Shop", "Resort Accommodations"]
    },
    {
      id: 5,
      title: "Waterfront Restaurant Complex",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      year: "2022",
      location: "San Diego, CA",
      description: "Waterfront dining complex with multiple restaurants and outdoor seating.",
      features: ["Waterfront Location", "Multiple Restaurants", "Outdoor Seating"]
    },
    {
      id: 6,
      title: "Ski Resort Lodge",
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      year: "2021",
      location: "Aspen, CO",
      description: "Mountain resort lodge with ski-in/ski-out access and alpine amenities.",
      features: ["Ski Access", "Mountain Lodge", "Alpine Amenities"]
    }
  ];

  return <ProjectCategory category="hospitality-leisure" projects={projects} />;
};

export default HospitalityLeisure;