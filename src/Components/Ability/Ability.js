import React from "react";
import Fade from "@mui/material/Fade";
import { Typography } from "@mui/material";
import "./Ability.scss";
import Axios from "../../assets/Photo/BrainStation/axios.png"
import Express from "../../assets/Photo/BrainStation/Express.png"
import Git from "../../assets/Photo/BrainStation/Git.png"
import GitHub from "../../assets/Photo/BrainStation/GitHub.png"
import HEROKU from "../../assets/Photo/BrainStation/HEROKU.png"
import html5 from "../../assets/Photo/BrainStation/html5.png"
import JS from "../../assets/Photo/BrainStation/JS.png"
import MySQL from "../../assets/Photo/BrainStation/MySQL.png"
import Node from "../../assets/Photo/BrainStation/Node.png"
import NPM from "../../assets/Photo/BrainStation/NPM.png"
import react from "../../assets/Photo/BrainStation/React.png"
import Sass from "../../assets/Photo/BrainStation/Sass.png"
import VSCode from "../../assets/Photo/BrainStation/VSCode.png"
import netify from "../../assets/Photo/BrainStation/netify.png"
import AutoCAD from "../../assets/Photo/Mechanical/AutoCAD.png"
import matlab from "../../assets/Photo/Mechanical/matlab.png"
import MicOffice from "../../assets/Photo/Mechanical/MicOffice.png"
import SolidWorks from "../../assets/Photo/Mechanical/SolidWorks.png"
import PLC from "../../assets/Photo/Mechanical/studio5000.png"

const Ability = () => {
    const AbilityData = [
        {
            Type: "Fullstack Development",
            Skills: [
                
                {
                    Icon: html5,
                    Skill: "HTML5",
                },
                {
                    Icon: JS,
                    Skill: "JavaScript",
                },
                {
                    Icon: MySQL,
                    Skill: "MySQL",
                },
                {
                    Icon: Node,
                    Skill: "Node.js",
                },

                {
                    Icon: NPM,
                    Skill: "NPM",
                },

                {
                    Icon: react,
                    Skill: "React JS&JSX",
                },

                {
                    Icon: Sass,
                    Skill: "SASS (Syntactically Awesome Style Sheets)",
                },

                {
                    Icon: VSCode,
                    Skill: "Visual Studio Code",
                },

                {
                    Icon: netify,
                    Skill: "Netlify",
                },
                
                {
                    Icon: Express,
                    Skill: "Express",
                },
                {
                    Icon: Git,
                    Skill: "Git",
                },
                {
                    Icon: GitHub,
                    Skill: "GitHub",
                },
                {
                    Icon: HEROKU,
                    Skill: "HEROKU",
                },
                {
                    Icon: Axios,
                    Skill: "Axios",
                },
            ],
        },
        {
            Type: "Software Development",
            Skills:
                "Project Structure & Setup, BEM (Block. Element. Modifier), Static Websites, Multi-Page Websites, Version Control with Git, Research & Problem Solving, Dynamic Websites, API Data Handling, Asynchronous Code, Single Page Applications, Dynamic URLs and Routing, Browser Data Handling, Object-Relational Mapping (ORM)."
             ,

        },
        {
            Type: "Mechanical Software",
            Skills: [
                {
                    Icon: AutoCAD,
                    Skill: "AutoCAD",
                },
                {
                    Icon: matlab,
                    Skill: "MATLAB",
                },
                {
                    Icon: MicOffice,
                    Skill: "Microsoft Office",
                },
                {
                    Icon: SolidWorks,
                    Skill: "SOLIDWORKS",
                },
                {
                    Icon: PLC,
                    Skill: "PLC (Programmable Logic Controller) ",
                },
            ],
        },
        {
            Type: "Engineering and Project Management",
            Skills:
            
                "Projects Management (5S), Manufacturing Documents (FMEA (Failure Mode and Effects Analysis), Control Plans, Process Flow Diagrams), GD&T (Geometric Dimensioning and Tolerancing), Root Cause Analysis, Documentation",
        },
        {
            Type: "Quality Assurance",
            Skills: "Data Analysis, Report Writing, PPAP (Production Part Approval Process), Communication",

        },
        {
            Type: "Language",
            Skills: "English (Advanced), Vietnamese (Superior), Cantonese (Intermediate)",

        },
        {
            Type: "Certificate",
            Skills:
            
                "Website Development (From BrainStation), CSWA (Certified SOLIDWORKS Associate) (Certificate from SOLIDWORKS)",
        },

    ];


    return (
        <div className="ability">
          {AbilityData.map((category, index) => (
            <div key={index} className="ability-category">
              <Fade in={true} timeout={1000 * index}>
                <Typography variant="h2">{category.Type}</Typography>
              </Fade>
    
              {Array.isArray(category.Skills) ? (
                <ul>
                  {category.Skills.map((skill, skillIndex) => (
                    <li key={skillIndex}>
                      <Fade in={true} timeout={1000 * (index + skillIndex)}>
                        <img src={skill.Icon} alt={skill.Skill} />
                      </Fade>
                      <Fade in={true} timeout={1000 * (index + skillIndex + 1)}>
                        <Typography variant="body1">{skill.Skill}</Typography>
                      </Fade>
                    </li>
                  ))}
                </ul>
              ) : (
                <Fade in={true} timeout={1000 * (index + 1)}>
                  <Typography variant="body1">{category.Skills}</Typography>
                </Fade>
              )}
            </div>
          ))}
        </div>
      );
    };
    
    export default Ability;