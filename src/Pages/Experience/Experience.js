import ExperienceDetail from "../../Components/ExperienceDetail/ExperienceDetail";
import "./Experience.scss";
import React from "react";
import Profile_pic from "../../Components/Profile_pic/Profile_pic"


export default function Experience() {
  return (
    <div className="experience">
        {/* eslint-disable-next-line react/jsx-pascal-case */}
<Profile_pic />
      <ExperienceDetail />
    </div>
  );
}