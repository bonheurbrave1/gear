// src/pages/Projects/Residential.js
import React from 'react';
import ProjectCategory from '../../components/ProjectCategory/ProjectCategory';
import sp1 from "../../assets/projects/softpack/sp1.png"
import sp2 from "../../assets/projects/softpack/sp2.png"

import impala1 from "../../assets/projects/impala/impala1.png"
import impala2 from "../../assets/projects/impala/impala2.png"
import impala3 from "../../assets/projects/impala/impala3.png"

import bf1 from "../../assets/projects/bf/bf1.png"
import bf2 from "../../assets/projects/bf/bf2.png"
import bf3 from "../../assets/projects/bf/bf3.png"
import bf4 from "../../assets/projects/bf/bf4.png"
import bf5 from "../../assets/projects/bf/bf5.png"
import bf6 from "../../assets/projects/bf/bf6.png"
import bf7 from "../../assets/projects/bf/bf7.png"
import bf8 from "../../assets/projects/bf/bf8.png"

import rh1 from "../../assets/projects/rh/rh1.png"
import rh2 from "../../assets/projects/rh/rh2.png"
import rh3 from "../../assets/projects/rh/rh3.png"

const Residential = () => {
  const projects = [
    {
      id: 1,
      title: "ALI MANJI RESIDENTIAL",
      images: [
       impala1,impala2 , impala3
      ],
      location: "Kigali, Rwanda - Kigali Economic zone"
    },
    {
      id: 2,
      title: "FRANCOIS NANKOBOGO APARTMENTS",
      images: [
        sp1,sp2
      ],
      location: "Kigali, Rwanda Economic zone"
    },
    
    {
      id: 3,
      title: "CHRISTINE HAJABAKIGA RESIDENTIAL",
      images: [
        bf1 , bf2 , bf3  , bf4 , bf5 , bf6 ,bf7 , bf8
      ],
      location: "Kigali, Rwanda Economic zone"
    },
   
    {
      id: 4,
      title: "BUMBOGO TWIN HOUSE",
      images: [
        rh1,rh2,rh3
      ],
      location: "Kigali, Rwanda Economic zone"
    },
   
    {
      id: 5,
      title: "BUSANZA RESIDENTIAL",
      images: [
        rh1,rh2,rh3
      ],
      location: "Kigali, Rwanda Economic zone"
    },
   
    {
      id: 6,
      title: "LIBAN APPARTMENTS",
      images: [
        rh1,rh2,rh3
      ],
      location: "Kigali, Rwanda Economic zone"
    },
   
    {
      id: 7,
      title: "RUSORORO RESIDENTIAL",
      images: [
        rh1,rh2,rh3
      ],
      location: "Kigali, Rwanda Economic zone"
    },
    {
      id: 8,
      title: "SENZEYI APARTMENTS",
      images: [
        rh1,rh2,rh3
      ],
      location: "Kigali, Rwanda Economic zone"
    },
    {
      id: 9,
      title: "REBERO ESTATE",
      images: [
        rh1,rh2,rh3
      ],
      location: "Kigali, Rwanda Economic zone"
    },
   
  ];

  return <ProjectCategory category="Residential" projects={projects} />;
};

export default Residential; 