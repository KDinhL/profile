import React from "react";
import "./ExperienceDetail.scss";
import Fade from "@mui/material/Fade";
import { Typography } from "@mui/material";
import Powercor from "../../assets/Photo/Linamar/Powercor.png";

export default function ExperienceDetail() {
  const ExperienceData = [
    {
      company: "PowerCor Manufacturing",
      title: "Junior Process Engineer",
      startTime: "Oct-2022",
      endTime: "Feb-2023",
      jobDescription:
        "As a Junior Process Engineer, I troubleshoot machinery, estimate timings, and handle documentation, troubleshooting, improvements, and training. I ensure the process meets specifications, lead teams for program launches, and implement APQP. I also manage projects, conduct experiments, track data, and ensure compliance with quality standards, including PPAP and FMEA.",
      skills:
        "Data Analysis; Reporting; Mechanical Troubleshooting; Continuous Learning; Microsoft Office Suite, SOLIDWORKS, AutoCAD; Manufacturing Document (APQP; Process Control Plans, PFMEA; etc); Process Improvement (5S)",
      companyLogo: Powercor,
    },
    {
      company: "PowerCor Manufacturing",
      title: "Junior Quality Engineer",
      startTime: "Oct-2021",
      endTime: "Oct-2022",
      jobDescription:
        "As a Junior Quality Engineer, I demonstrated proficiency in performing routine to complex inspections, setting quality standards, and developing effective testing methods. Collaborating seamlessly with my team, I addressed quality issues and played a key role in implementing the quality management system. Conducting thorough audits and skillfully handling customer complaints, I maintained comprehensive documentation throughout the process. Root cause analysis, reporting, and expertise in quality assurance functions were integral aspects of my role. My proficiency in Microsoft Office, auditing, and gauging methods, including calibration, contributed significantly to maintaining and enhancing PowerCor's high-quality standards.",
      skills:
        "Root Cause Analysis; Reporting; Quality Assurance Functions; Microsoft Office proficiency; Auditing; Gauging Methods and Calibration",
      companyLogo: Powercor,
    },

    {
        company: "Camcor Manufacturing",
        title: "Robotics and Automation (Intership)",
        startTime: "Sep-2020",
        endTime: "Dec-2020",
        jobDescription:
          "During my four-month term at Camcor Manufacturing from September to December 2020, I was assigned to Robotics and Automation tasks. My responsibilities included designing tooling to detect misloaded parts, creating documentation for machinery, generating purchase requisitions, configuring device addressing, and updating PLC/HMI programs. I also gained hands-on experience in the mechanical build of equipment during this period.",
        skills:
          "PLC/HTML; Reporting; SOLIDWORKS",
        companyLogo: Powercor,
      },

      {
        company: "Camtac Manufacturing",
        title: "Engineering Co-op Student (3 Terms)",
        startTime: "January-2017",
        endTime: "September-2019",
        jobDescription:
          "In the one-year term at Camtac Manufacturing, I spent a year refining my skills in high-quality automotive part production. As an Engineering Co-op Student, I focused on Data Management, Machining, and Quality Control. This experience deepened my understanding of precision manufacturing and contributed to my proficiency in data handling and quality assurance.",
        skills:
          "Data & Information Management; Quality Control/Quality Assurance/Testing; SOLIDWORKS; ERP; AutoCAD ",
        companyLogo: Powercor,
      },
  ];

  return (
    <div className="experience-detail">
      {ExperienceData.map((experience, index) => (
        <Fade key={index} in={true} timeout={1000 * (index + 1)}>
          <div className="experience-item">
            <div className="company-container">
              <Typography variant="h5" className="experience-title">
                {experience.company}
              </Typography>
              <img
                src={experience.companyLogo}
                alt={`Company Logo for ${experience.title}`}
                className="company-logo"
              />
            </div>
            <Typography variant="h6" className="experience-title">
            {experience.title}
            </Typography>
            <Typography variant="subtitle1" className="experience-duration">
              {`${experience.startTime} - ${experience.endTime}`}
            </Typography>
            <Typography variant="body1" className="experience-description">
              {experience.jobDescription}
            </Typography>
            <Typography variant="body2" className="experience-skills">
            <strong>Skills:</strong> {experience.skills}
            </Typography>
          </div>
        </Fade>
      ))}
    </div>
  );
}