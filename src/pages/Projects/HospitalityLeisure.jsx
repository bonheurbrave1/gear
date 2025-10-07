// src/pages/Projects/HospitalityLeisure.js
import React from 'react';
import ProjectCategory from '../../components/ProjectCategory/ProjectCategory';
import gis1 from "../../assets/projects/gis/gis1.png"
import gis2 from "../../assets/projects/gis/gis2.png"
import gis3 from "../../assets/projects/gis/gis3.png"


const HospitalityLeisure = () => {
  const projects = [
    {
      id: 1,
      title: "MULTIPURPOSE HALL IN GISOZI",
      images: [
        gis1,gis2 , gis3
      ],
      location: "Kigali, Rwanda - Kigali Economic zone"
    },
   


   
  ];

  return <ProjectCategory category="HospitalityLeisure" projects={projects} />;
};

export default HospitalityLeisure; 