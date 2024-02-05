// Graduate.js
import React from "react";
import Fade from "@mui/material/Fade";
import { Typography } from "@mui/material";
import Automated from "../../assets/Photo/Conestoga College/automated.png";
import MSE from "../../assets/Photo/Conestoga College/MSE.png";
import Software from "../../assets/Photo/Conestoga College/Software.png";
import "./Graduate.scss"; // Import the SCSS file

export default function Education() {
  const EducationData = [
    {
        College: "BrainStation",
        Program: "Software Engineering-Bootcamp Online",
        Degree: "Diploma",
        startTime: "Jul-2023",
        endTime: "Sep-2023",
        Description:
          "The 'Software Engineering Bootcamp Online' is a diploma program designed to provide aspiring Software Engineers with practical, hands-on experience by tackling real business cases from industry leaders like Microsoft, Mastercard, and Google. Students engage in dynamic projects, collaborating with industry professionals and fellow learners from different BrainStation bootcamps. Emphasizing the importance of diversity, the program mirrors the real-world scenarios Software Engineers face in their careers. Successful completion leads to a Diploma, signifying a recognized level of achievement. The online format ensures flexibility, while networking opportunities, mentorship, and a commitment to staying current with industry trends enhance the overall learning experience.",
        website:
          "https://brainstation.io/online/software-engineering-bootcamp",
          GPA: "3.0",
        picture: Software,
      },
      {
      College: "Conestoga College",
      Program: "Bachelor of Engineering - Mechanical Systems Engineering",
      Degree: "Bachelor",
      startTime: "Sep-2018",
      endTime: "Sep-2021",
      Description:
        "The accredited Bachelor of Engineering - Mechanical Systems Engineering program combines interdisciplinary studies in mechanical, industrial, and control engineering. Graduates achieve professional engineering status after mandatory work experience and an exam. Using a unique project-based curriculum, students gain hands-on experience, developing skills in project management and environmental protection. With twelve months of paid co-op opportunities, graduates are well-prepared for successful careers in various engineering fields.",
      GPA: "3.41",
      website:
        "https://www.conestogac.on.ca/fulltime/bachelor-of-engineering-mechanical-systems-engineering",
      picture: MSE,
    },
    {
      College: "Conestoga College",
      Program: "Mechanical Engineering Technology - Automated Manufacturing (Optional Co-op)",
      Degree: "Diploma",
      startTime: "Sep-2015",
      endTime: "Sep-2018",
      Description:
        "The Diploma in Mechanical Engineering Technology offers students a comprehensive education in modern industrial practices, focusing on manufacturing procedures, design, computer-aided manufacturing, and industrial robotics. The program prepares students for diverse careers, including additive manufacturing, robotics systems, 3D CAD, numerical control machine programming, industry 4.0, and industrial engineering. Through hands-on projects and a co-op option, students gain practical experience in solving real-world automated manufacturing problems. The curriculum emphasizes the integration of standard manufacturing processes with computer-aided manufacturing and the use of industrial automation equipment. Effective communication skills, both linguistic and graphic, are emphasized, and the program is conditionally recognized by OACETT for meeting academic requirements for Certified Engineering Technologist (CET) certification.",
      GPA: "3.27",
      website:
        "https://www.conestogac.on.ca/fulltime/mechanical-engineering-technology-automated-manufacturing",
      picture: Automated,
    },
  ];

  return (
    <div className="education">
      {EducationData.map((item, index) => (
        <Fade in={true} timeout={1000 * (index + 1)} key={index}>
          <div className="education-item">
            <img src={item.picture} alt={item.Program} className="education-image" />
            <div className="education-details">
              <Typography variant="h4">{item.College}</Typography>
              <Typography variant="h5">{item.Program}</Typography>
              <Typography variant="body1">{item.Description}</Typography>
              <Typography variant="h6">GPA: {item.GPA}</Typography>
              <Typography variant="body1">
                <span>
                  {item.startTime} to {item.endTime}
                </span>
              </Typography>
              <Typography variant="body1">
                <a href={item.website} target="_blank" rel="noopener noreferrer">
                  Learn more
                </a>
              </Typography>
            </div>
          </div>
        </Fade>
      ))}
    </div>
  );
}