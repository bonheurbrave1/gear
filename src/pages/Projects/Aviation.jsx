// src/pages/Projects/Aviation.js
import React from 'react';
import ProjectCategory from '../../components/ProjectCategory/ProjectCategory';

const Aviation = () => {
  const projects = [
    {
      id: 1,
      title: "Regional Airport Terminal",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      year: "2024",
      location: "Austin, TX",
      description: "Modern regional airport terminal with enhanced security and passenger amenities.",
      features: ["Enhanced Security", "Passenger Amenities", "Modern Design"]
    },
    {
      id: 2,
      title: "Aircraft Maintenance Hangar",
      image: "https://images.unsplash.com/photo-1558618666-fcd25856cd25?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      year: "2023",
      location: "Miami, FL",
      description: "Large aircraft maintenance facility with multiple bays and specialized equipment.",
      features: ["Multiple Bays", "Specialized Equipment", "Maintenance Facilities"]
    },
    {
      id: 3,
      title: "Air Cargo Terminal Expansion",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      year: "2023",
      location: "Anchorage, AK",
      description: "Expansion of existing air cargo terminal with cold chain capabilities.",
      features: ["Cold Chain", "Expansion Project", "Cargo Handling"]
    },
    {
      id: 4,
      title: "General Aviation Facility",
      image: "https://images.unsplash.com/photo-1558618666-fcd25856cd25?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      year: "2022",
      location: "Phoenix, AZ",
      description: "General aviation center with hangars, fueling station, and pilot facilities.",
      features: ["Hangars", "Fueling Station", "Pilot Facilities"]
    },
    {
      id: 5,
      title: "Airport Control Tower",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      year: "2022",
      location: "Denver, CO",
      description: "New air traffic control tower with advanced radar and communication systems.",
      features: ["Control Tower", "Radar Systems", "Communications"]
    },
    {
      id: 6,
      title: "Aviation Training Center",
      image: "https://images.unsplash.com/photo-1558618666-fcd25856cd25?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      year: "2021",
      location: "Dallas, TX",
      description: "Comprehensive aviation training facility with simulators and classrooms.",
      features: ["Training Simulators", "Classrooms", "Aviation Focus"]
    }
  ];

  return <ProjectCategory category="aviation" projects={projects} />;
};

export default Aviation;