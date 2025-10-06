// src/pages/Projects/Agriculture.js
import React from 'react';
import ProjectCategory from '../../components/ProjectCategory/ProjectCategory';

const Agriculture = () => {
  const projects = [
    {
      id: 1,
      title: "Modern Grain Storage Facility",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      year: "2024",
      location: "Des Moines, IA",
      description: "Advanced grain storage complex with drying systems and quality control labs.",
      features: ["Grain Storage", "Drying Systems", "Quality Control"]
    },
    {
      id: 2,
      title: "Livestock Processing Plant",
      image: "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      year: "2023",
      location: "Amarillo, TX",
      description: "USDA-approved livestock processing facility with humane handling systems.",
      features: ["USDA Approved", "Humane Handling", "Processing Systems"]
    },
    {
      id: 3,
      title: "Greenhouse Complex",
      image: "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      year: "2023",
      location: "Salinas, CA",
      description: "Large-scale greenhouse facility with climate control and hydroponic systems.",
      features: ["Climate Control", "Hydroponic Systems", "Year-Round Production"]
    },
    {
      id: 4,
      title: "Dairy Processing Plant",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      year: "2022",
      location: "Madison, WI",
      description: "Modern dairy processing facility with pasteurization and packaging lines.",
      features: ["Pasteurization", "Packaging Lines", "Cold Storage"]
    },
    {
      id: 5,
      title: "Agricultural Research Center",
      image: "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      year: "2022",
      location: "Raleigh, NC",
      description: "Research and development center for agricultural technology and crop science.",
      features: ["Research Labs", "Technology Development", "Crop Science"]
    },
    {
      id: 6,
      title: "Organic Food Processing",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      year: "2021",
      location: "Eugene, OR",
      description: "Certified organic food processing facility with sustainable practices.",
      features: ["Organic Certified", "Sustainable Practices", "Food Safety"]
    }
  ];

  return <ProjectCategory category="agriculture" projects={projects} />;
};

export default Agriculture;