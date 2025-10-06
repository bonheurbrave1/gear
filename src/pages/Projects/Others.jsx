// src/pages/Projects/Others.js
import React from 'react';
import ProjectCategory from '../../components/ProjectCategory/ProjectCategory';

const Others = () => {
  const projects = [
    {
      id: 1,
      title: "Community Center Complex",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      year: "2024",
      location: "Portland, OR",
      description: "Multi-purpose community center with recreational, educational, and social spaces.",
      features: ["Multi-Purpose", "Recreational Spaces", "Community Focus"]
    },
    {
      id: 2,
      title: "Government Administration Building",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      year: "2023",
      location: "Washington, DC",
      description: "Modern government facility with public service areas and administrative offices.",
      features: ["Public Service Areas", "Administrative Offices", "Government Facility"]
    },
    {
      id: 3,
      title: "Medical Research Facility",
      image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      year: "2023",
      location: "Boston, MA",
      description: "Specialized medical research center with laboratories and clinical spaces.",
      features: ["Research Labs", "Clinical Spaces", "Medical Focus"]
    },
    {
      id: 4,
      title: "Cultural Arts Center",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      year: "2022",
      location: "Santa Fe, NM",
      description: "Arts and culture center with galleries, performance spaces, and studios.",
      features: ["Galleries", "Performance Spaces", "Artist Studios"]
    },
    {
      id: 5,
      title: "Religious Institution",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      year: "2022",
      location: "Salt Lake City, UT",
      description: "New religious facility with worship spaces, community areas, and educational wings.",
      features: ["Worship Spaces", "Community Areas", "Educational Wings"]
    },
    {
      id: 6,
      title: "Recycling & Waste Facility",
      image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      year: "2021",
      location: "San Francisco, CA",
      description: "Modern recycling and waste management facility with sorting and processing systems.",
      features: ["Recycling Systems", "Waste Management", "Processing Equipment"]
    }
  ];

  return <ProjectCategory category="others" projects={projects} />;
};

export default Others;