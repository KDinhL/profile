import React from "react";
import "./Selfintro.scss";
import Fade from "@mui/material/Fade";
import { Typography } from "@mui/material";

export default function Selfintro() {
  const questionAnswerData = [
    {
      question: "Who am I?",
      answer: "My name is Dinh Kien Ly. I have a Mechanical Engineer background and have honed my project troubleshooting and data analysis skills. I have successfully completed BrainStation's Software Engineering Bootcamp and developed my skills in programming. Combining my engineering background with skills developed through the Bootcamp, I am eager to apply my multidisciplinary expertise in a role that allows me to make valuable contributions."
    },
    {
      question: "What I can do?",
      answer:
        "Proficient in Data Analysis, Full-Stack Development, Team Support, Troubleshooting, and quick adaptability to dynamic environments."
    },
  ];

  return (
    <div className="selfintro">
      {questionAnswerData.map((item, index) => (
        <div key={index} className="selfintro__question-answer">
          <Typography variant="h6" className="selfintro__question">
            {item.question}
          </Typography>
          <Fade in={true} timeout={1000 * (index + 1)}>
            <Typography variant="body1" className="selfintro__answer">
              {item.answer.split("BrainStation").map((part, i, arr) => (
                i !== arr.length - 1 ? (
                  <React.Fragment key={i}>
                    {part}
                    <a href="https://brainstation.io/" target="_blank" rel="noopener noreferrer">BrainStation</a>
                  </React.Fragment>
                ) : part
              ))}
            </Typography>
          </Fade>
        </div>
      ))}

    </div>
  );
}