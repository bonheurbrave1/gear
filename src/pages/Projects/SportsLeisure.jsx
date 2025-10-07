// src/pages/Projects/SportsLeisure.js
import React from 'react';
import ProjectCategory from '../../components/ProjectCategory/ProjectCategory';
import sp1 from "../../assets/projects/softpack/sp1.png"
import sp2 from "../../assets/projects/softpack/sp2.png"

import impala1 from "../../assets/projects/impala/impala1.png"
import impala2 from "../../assets/projects/impala/impala2.png"
import impala3 from "../../assets/projects/impala/impala3.png"

import eb1 from "../../assets/projects/ecoleberge/eb1.png"
import eb2 from "../../assets/projects/ecoleberge/eb2.png"
import eb3 from "../../assets/projects/ecoleberge/eb3.png"
import eb4 from "../../assets/projects/ecoleberge/eb4.png"
import eb5 from "../../assets/projects/ecoleberge/eb5.png"
import eb6 from "../../assets/projects/ecoleberge/eb6.png"
import eb7 from "../../assets/projects/ecoleberge/eb7.png"


const SportsLeisure = () => {
  const projects = [
    {
      id: 1,
      title: "ISPORT HALL ECOLE BELGE DE KIGALI- GISOZI CAMPUS",
      images: [
        eb1,eb2,eb3 , eb4, eb5 ,eb6 ,eb7
      ],
      location: "Kigali, Rwanda - Gisozi campus"
    }
   
  ];

  return <ProjectCategory category="SportsLeisure" projects={projects} />;
};

export default SportsLeisure; 