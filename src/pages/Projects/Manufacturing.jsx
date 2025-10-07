// src/pages/Projects/Manufacturing.js
import React from 'react';
import ProjectCategory from '../../components/ProjectCategory/ProjectCategory';

import sp1 from "../../assets/projects/speranza/sp1.png"
import sp2 from "../../assets/projects/speranza/sp2.png"
import sp3 from "../../assets/projects/speranza/sp3.png"

import gl1 from "../../assets/projects/greatlakes/gl1.png"
import gl2 from "../../assets/projects/greatlakes/gl2.png"
import gl3 from "../../assets/projects/greatlakes/gl3.png"


import mb1 from "../../assets/projects/mb/mb1.png"
import mb2 from "../../assets/projects/mb/mb2.png"
import mb3 from "../../assets/projects/mb/mb3.png"

import cao1 from "../../assets/projects/cao/cao1.png"
import cao2 from "../../assets/projects/cao/cao2.png"
import cao3 from "../../assets/projects/cao/cao3.png"
import cao from "../../assets/projects/cao/cao.png"

import bio1 from "../../assets/projects/bio/bio1.png"
import bio2 from "../../assets/projects/bio/bio2.png"
import bio3 from "../../assets/projects/bio/bio3.png"
import bio4 from "../../assets/projects/bio/bio4.png"

import vr1 from "../../assets/projects/vr/vr1.png"
import vr2 from "../../assets/projects/vr/vr2.png"
import vr3 from "../../assets/projects/vr/vr3.png"
import vr4 from "../../assets/projects/vr/vr4.png"


import ea1 from "../../assets/projects/ea/ea1.png"
import ea2 from "../../assets/projects/ea/ea2.png"
import ea3 from "../../assets/projects/ea/ea3.png"
import ea4 from "../../assets/projects/ea/ea4.png"
import ea5 from "../../assets/projects/ea/ea5.png"
import ea6 from "../../assets/projects/ea/ea6.png"

import ab1 from "../../assets/projects/ab/ab1.png"
import ab2 from "../../assets/projects/ab/ab2.png"
import ab3 from "../../assets/projects/ab/ab3.png"
import ab4 from "../../assets/projects/ab/ab4.png"


const Manufacturing = () => {
  const projects = [
    {
      id: 1,
      title: "SPERANZA GROUP LTD FACTORY AT KIGALI FREE TRADE ZONE",
      images: [
        sp1,sp2,sp3
      ],
      location: "Kigali, Rwanda - Kigali Free Trade Zone"
    },
    {
      id: 2,
      title: "GREAT LAKES TRANSPORT AND TRADE WARE HOUSE AT KIGALI FREE TRADE ZONE",
      images: [
        gl1,gl2,gl3
      ],
      location: "Kigali, Rwanda"
    },
    {
      id: 3,
      title: "MARTIN BIMENYIMANA WAREHOUSE PROJECT IN RWAMAGANA SPECIAL ECONOMIC ZONE",
      images: [
        mb1, mb2 , mb3
      ],
      location: "Eastern , Rwamagana Economic Zone"
    },
    {
      id: 4,
      title: "EKATEC & CAO SHOUFFENG PROJECT RUHANGA-KIGALI",
      images: [
        cao1, cao2,cao3,cao
      ],
      location: "Kigali Rwanda , Ruhanga Kigali "
    },
    {
      id: 5,
      title: "ARTH BIOBAGS PACKAGING FACTORY SPECIAL ECONOMIC ZONE- KIGALI",
      images: [
        bio1 ,bio2,bio3,bio4
      ],
      location: "Kigali Rwanda , Ruhanga Kigali "
    },
    {
      id: 5,
      title: "VERENA INDUSTIES LTD JABANA ECONOMIC ZONE",
      images: [
        vr1 , vr2 , vr3 , vr4
      ],
      location: "Kigali Gasabo , Jabana Economic Zone"
    },
    {
      id: 6,
      title: "EAST AFRICAN STEEL INDUSTRY LTD SPECIAL ECONOMIC ZONE- KIGALI",
      images: [
        ea1 , ea2 , ea3 , ea4 , ea5 , ea6
      ],
      location: "Kigali , Rwanda - Social economic zone"
    },
    {
      id: 7,
      title: "ARTH BIOBAGS PACKAGING FACTORY SPECIAL ECONOMIC ZONE- KIGALI",
      images: [
        ab1, ab2 , ab3 ,ab4
      ],
      location: "Kigali , Rwanda - Social economic zone"
    },

  ];

  return <ProjectCategory category="Manufacturing" projects={projects} />;
};

export default Manufacturing; 