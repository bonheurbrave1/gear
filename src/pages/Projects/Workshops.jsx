// src/pages/Projects/Workshops.js
import React from 'react';
import ProjectCategory from '../../components/ProjectCategory/ProjectCategory';

const Workshops = () => {
  const projects = [
    {
      id: 1,
      title: "Advanced Automotive Workshop",
      image: "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      year: "2024",
      location: "Dallas, TX",
      description: "State-of-the-art automotive repair and maintenance facility with specialized equipment.",
      features: ["Lift Systems", "Diagnostic Equipment", "Specialized Tools"]
    },
    {
      id: 2,
      title: "Metal Fabrication Shop",
      image: "https://images.unsplash.com/photo-1572015099635-34eee651a27e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      year: "2023",
      location: "Pittsburgh, PA",
      description: "Professional metalworking shop with CNC machines and welding stations.",
      features: ["CNC Machines", "Welding Stations", "Fabrication Equipment"]
    },
    {
      id: 3,
      title: "Woodworking Studio",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      year: "2023",
      location: "Portland, OR",
      description: "Custom woodworking studio with dust collection and specialized woodworking tools.",
      features: ["Dust Collection", "Specialized Tools", "Finishing Room"]
    },
    {
      id: 4,
      title: "Electrical Workshop",
      image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      year: "2022",
      location: "Phoenix, AZ",
      description: "Professional electrical workshop with testing equipment and training facilities.",
      features: ["Testing Equipment", "Training Area", "Safety Systems"]
    },
    {
      id: 5,
      title: "Mechanical Repair Shop",
      image: "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      year: "2022",
      location: "Charlotte, NC",
      description: "Comprehensive mechanical workshop for equipment repair and maintenance.",
      features: ["Heavy Equipment", "Repair Bays", "Parts Storage"]
    },
    {
      id: 6,
      title: "Creative Makerspace",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      year: "2021",
      location: "Austin, TX",
      description: "Community makerspace with multiple workshop areas for various creative projects.",
      features: ["Multiple Stations", "Community Focus", "Creative Tools"]
    }
  ];

  return <ProjectCategory category="workshops" projects={projects} />;
};

export default Workshops;