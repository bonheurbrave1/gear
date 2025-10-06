// src/pages/Projects/Education.js
import React from 'react';
import ProjectCategory from '../../components/ProjectCategory/ProjectCategory';

const Education = () => {
  const projects = [
    {
      id: 1,
      title: "University Science Center",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      year: "2024",
      location: "Cambridge, MA",
      description: "Advanced science and research center with laboratories and collaborative spaces.",
      features: ["Research Labs", "Collaborative Spaces", "Advanced Equipment"]
    },
    {
      id: 2,
      title: "Elementary School Campus",
      image: "https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      year: "2023",
      location: "San Diego, CA",
      description: "Modern elementary school with outdoor learning areas and technology integration.",
      features: ["Outdoor Learning", "Technology Integration", "Modern Classrooms"]
    },
    {
      id: 3,
      title: "Vocational Training Center",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      year: "2023",
      location: "Detroit, MI",
      description: "Career and technical education center with workshops and industry-standard equipment.",
      features: ["Workshops", "Industry Equipment", "Career Training"]
    },
    {
      id: 4,
      title: "Library & Learning Commons",
      image: "https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      year: "2022",
      location: "Seattle, WA",
      description: "Modern library facility with digital resources and collaborative study areas.",
      features: ["Digital Resources", "Study Areas", "Community Space"]
    },
    {
      id: 5,
      title: "Athletic Facility Expansion",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      year: "2022",
      location: "Columbus, OH",
      description: "Expansion of university athletic facilities with training centers and arenas.",
      features: ["Training Centers", "Arenas", "Athletic Facilities"]
    },
    {
      id: 6,
      title: "Early Childhood Center",
      image: "https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      year: "2021",
      location: "Portland, OR",
      description: "Specialized facility for early childhood education with safe, engaging environments.",
      features: ["Early Childhood", "Safe Environments", "Engaging Design"]
    }
  ];

  return <ProjectCategory category="education" projects={projects} />;
};

export default Education;