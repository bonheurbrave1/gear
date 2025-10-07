// src/pages/Projects/Warehousing.js
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

import sl1 from "../../assets/projects/sl/sl1.png"
import sl2 from "../../assets/projects/sl/sl2.png"
import sl3 from "../../assets/projects/sl/sl3.png"


const Warehousing = () => {
  const projects = [
    {
      id: 1,
      title: "IMPALA TRADING LTD WAREHOUSES IN KSEZ",
      images: [
       impala1,impala2 , impala3
      ],
      location: "Kigali, Rwanda - Kigali Economic zone"
    },
    {
      id: 2,
      title: "SOFT PACKAGING WAREHOUSES IN KIGALI SPECIAL ECONOMIC ZONE",
      images: [
        sp1,sp2
      ],
      location: "Kigali, Rwanda Economic zone"
    },
    
    {
      id: 3,
      title: "BEST FASHION DESIGNER LTD KIGALI SPECIAL ECONOMIC ZONE",
      images: [
        bf1 , bf2 , bf3  , bf4 , bf5 , bf6 ,bf7 , bf8
      ],
      location: "Kigali, Rwanda Economic zone"
    },
   
    {
      id: 3,
      title: "RUHANGA WAREHOUSES",
      images: [
        rh1 , rh2 , rh3 
      ],
      location: "Kigali, Rwanda Economic zone"
    },
   
    {
      id: 3,
      title: "SILVERSANDS INVESTEMENT LTD STORE WAREHOUSE AT KIGALI SPECIAL ECONIMIC ZONE",
      images: [
        sl1,sl2,sl3
      ],
      location: "Kigali, Rwanda - Special Economic zone"
    },
   
  ];

  return <ProjectCategory category="Warehousing" projects={projects} />;
};

export default Warehousing; 