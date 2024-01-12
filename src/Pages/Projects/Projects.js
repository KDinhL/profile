import React from "react";
import "./Projects.scss";
import Profile_pic from "../../Components/Profile_pic/Profile_pic"
import ProjectsDisplay from"../../Components/ProjectsDisplay/ProjectsDisplay"

export default function Profile() {
  return (
    <div className="projects">
       {/* eslint-disable-next-line react/jsx-pascal-case */}
<Profile_pic />
     <ProjectsDisplay/>
    </div>
  );
}