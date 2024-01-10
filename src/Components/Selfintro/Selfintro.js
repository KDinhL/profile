import React from "react";
import "./Selfintro.scss";
import Fade from "@mui/material/Fade";
import { Typography } from "@mui/material";

export default function Selfintro() {
  const questionAnswerData = [
    {
      question: "Who am I?",
      answer: "My name is Dinh Kien Ly. I have a Mechanical Engineering background and have honed my project troubleshooting and data analysis skills. I have successfully completed BrainStation's Software Engineering Bootcamp and developed my skills in programming (HTML, SASS, JavaScript, Node.js, React, and GitHub). I'm eager to apply my engineering background and newly acquired software skills in my future role, creating valuable contributions."
    },
    {
      question: "What I can do?",
      answer:
        "Proficient in Data Analysis, Full-Stack Development, Team Support, Troubleshooting, and quick adaptability to dynamic environments."
    },
    {
      question: "Am I good enough?",
      answer:
        "While I can't guarantee meeting your expectations from the outset, I am dedicated to giving my best effort. As W. Bruce Cameron aptly puts it, 'Failure is not an option if success is just a matter of trying harder.' This quote resonates with my commitment to continuous improvement and resilience in the face of challenges."
    }
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
              {item.answer}
            </Typography>
          </Fade>
        </div>
      ))}

      {/* Status Section */}
    </div>
  );
}