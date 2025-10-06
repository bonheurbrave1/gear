// src/pages/Projects/FoodBeverage.js
import React from 'react';
import ProjectCategory from '../../components/ProjectCategory/ProjectCategory';

const FoodBeverage = () => {
  const projects = [
    {
      id: 1,
      title: "Craft Brewery & Taproom",
      image: "https://images.unsplash.com/photo-1505075106905-fb052892c116?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      year: "2024",
      location: "Portland, OR",
      description: "Modern craft brewery with production facility, tasting room, and restaurant.",
      features: ["Brewing Equipment", "Tasting Room", "Restaurant"]
    },
    {
      id: 2,
      title: "Food Processing Plant",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      year: "2023",
      location: "Fresno, CA",
      description: "FDA-approved food processing facility with clean rooms and quality control labs.",
      features: ["FDA Approved", "Clean Rooms", "Quality Control"]
    },
    {
      id: 3,
      title: "Restaurant Kitchen Hub",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      year: "2023",
      location: "New York, NY",
      description: "Central kitchen facility supporting multiple restaurant locations with delivery systems.",
      features: ["Central Kitchen", "Multiple Outlets", "Delivery Systems"]
    },
    {
      id: 4,
      title: "Coffee Roasting Facility",
      image: "https://images.unsplash.com/photo-1505075106905-fb052892c116?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      year: "2022",
      location: "Seattle, WA",
      description: "Specialty coffee roasting plant with tasting room and training facility.",
      features: ["Roasting Equipment", "Tasting Room", "Training Facility"]
    },
    {
      id: 5,
      title: "Commercial Bakery",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      year: "2022",
      location: "Chicago, IL",
      description: "Large-scale commercial bakery supplying retail and food service customers.",
      features: ["Large Scale", "Retail Supply", "Food Service"]
    },
    {
      id: 6,
      title: "Beverage Distribution Center",
      image: "https://images.unsplash.com/photo-1505075106905-fb052892c116?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      year: "2021",
      location: "St. Louis, MO",
      description: "Temperature-controlled beverage distribution facility with loading systems.",
      features: ["Temperature Control", "Distribution", "Loading Systems"]
    }
  ];

  return <ProjectCategory category="food-beverage" projects={projects} />;
};

export default FoodBeverage;