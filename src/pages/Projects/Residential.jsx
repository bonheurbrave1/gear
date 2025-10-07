// src/pages/Projects/Residential.js
import React from 'react';
import ProjectCategory from '../../components/ProjectCategory/ProjectCategory';

import am1 from "../../assets/projects/am/am1.png"
import am2 from "../../assets/projects/am/am2.png"
import am3 from "../../assets/projects/am/am3.png"

import fn1 from "../../assets/projects/fn/fn1.png"
import fn2 from "../../assets/projects/fn/fn2.png"
import fn3 from "../../assets/projects/fn/fn3.png"

import ch1 from "../../assets/projects/ch/ch1.png"
import ch2 from "../../assets/projects/ch/ch2.png"
import ch3 from "../../assets/projects/ch/ch3.png"
import ch4 from "../../assets/projects/ch/ch4.png"

import bg1 from "../../assets/projects/bg/bg1.png"
import bg2 from "../../assets/projects/bg/bg2.png"
import bg3 from "../../assets/projects/bg/bg3.png"

import bs1 from "../../assets/projects/bs/bs1.png"
import bs2 from "../../assets/projects/bs/bs2.png"
import bs3 from "../../assets/projects/bs/bs3.png"

import lb1 from "../../assets/projects/lb/lb1.png"
import lb2 from "../../assets/projects/lb/lb2.png"
import lb3 from "../../assets/projects/lb/lb3.png"

import rs1 from "../../assets/projects/rs/rs1.png"
import rs2 from "../../assets/projects/rs/rs2.png"
import rs3 from "../../assets/projects/rs/rs3.png"

import sz1 from "../../assets/projects/sz/sz1.png"
import sz2 from "../../assets/projects/sz/sz2.png"
import sz3 from "../../assets/projects/sz/sz3.png"

import rb1 from "../../assets/projects/rb/rb1.png"
import rb2 from "../../assets/projects/rb/rb2.png"


const Residential = () => {
  const projects = [
    {
      id: 1,
      title: "ALI MANJI RESIDENTIAL",
      images: [
       am1,am2 , am3
      ],
      location: "Kigali, Rwanda"
    },
    {
      id: 2,
      title: "FRANCOIS NANKOBOGO APARTMENTS",
      images: [
        fn1,fn2,fn3
      ],
      location: "RWanda"
    },
    
    {
      id: 3,
      title: "CHRISTINE HAJABAKIGA RESIDENTIAL",
      images: [
        ch1 , ch2 , ch3 , ch4
      ],
      location: "Kigali"
    },
   
    {
      id: 4,
      title: "BUMBOGO TWIN HOUSE",
      images: [
        bg1 , bg2 , bg3 
      ],
      location: "Kigali"
    },
   
    {
      id: 5,
      title: "BUSANZA RESIDENTIAL",
      images: [
        bs1,bs2,bs3
      ],
      location: "Kigali"
    },
   
    {
      id: 6,
      title: "LIBAN APPARTMENTS",
      images: [
        lb1,lb2,lb3
      ],
      location: "Kigali"
    },
   
    {
      id: 7,
      title: "RUSORORO RESIDENTIAL",
      images: [
        rs1,rs2,rs3
      ],
      location: "Kigali"
    },
    {
      id: 8,
      title: "SENZEYI APARTMENTS",
      images: [
        sz1,sz2,sz3
      ],
      location: "Kigali"
    },
    {
      id: 9,
      title: "REBERO ESTATE",
      images: [
        rb1,rb2
      ],
      location: "Kigali"
    },
   
  ];

  return <ProjectCategory category="Residential" projects={projects} />;
};

export default Residential; 