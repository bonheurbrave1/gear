// src/pages/Projects/Retail.js
import React from 'react';
import ProjectCategory from '../../components/ProjectCategory/ProjectCategory';

const Retail = () => {
  const projects = [
    {
      id: 1,
      title: "Lifestyle Shopping Center",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      year: "2024",
      location: "Scottsdale, AZ",
      description: "Open-air lifestyle center with premium retailers, dining, and entertainment.",
      features: ["Open-Air Design", "Premium Retail", "Entertainment"]
    },
    {
      id: 2,
      title: "Urban Retail Complex",
      image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      year: "2023",
      location: "Boston, MA",
      description: "Mixed-use retail complex with ground-floor shopping and upper-level offices.",
      features: ["Mixed-Use", "Ground-Floor Retail", "Office Space"]
    },
    {
      id: 3,
      title: "Big Box Retail Store",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      year: "2023",
      location: "Orlando, FL",
      description: "Large-format retail store with extensive parking and loading facilities.",
      features: ["Large Format", "Extensive Parking", "Loading Facilities"]
    },
    {
      id: 4,
      title: "Boutique Retail Street",
      image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      year: "2022",
      location: "Charleston, SC",
      description: "Historic district retail street renovation with boutique storefronts.",
      features: ["Historic Renovation", "Boutique Stores", "Street Frontage"]
    },
    {
      id: 5,
      title: "Shopping Mall Renovation",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      year: "2022",
      location: "Minneapolis, MN",
      description: "Complete renovation of existing shopping mall with modern amenities.",
      features: ["Complete Renovation", "Modern Amenities", "Updated Design"]
    },
    {
      id: 6,
      title: "Convenience Retail Center",
      image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      year: "2021",
      location: "Nashville, TN",
      description: "Neighborhood retail center with grocery, pharmacy, and essential services.",
      features: ["Neighborhood Focus", "Essential Services", "Community Retail"]
    }
  ];

  return <ProjectCategory category="retail" projects={projects} />;
};

export default Retail;