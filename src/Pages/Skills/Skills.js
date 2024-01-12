import React from "react";
import "./Skills.scss";
import Profile_pic from "../../Components/Profile_pic/Profile_pic"
import Ability from "../../Components/Ability/Ability"


export default function Skills() {
  return (
    <div className="skills">
       {/* eslint-disable-next-line react/jsx-pascal-case */}
<Profile_pic />
     <Ability />
    </div>
  );
}