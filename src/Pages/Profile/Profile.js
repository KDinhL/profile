import React from "react";
import Selfintro from "../../Components/Selfintro/Selfintro";
import "./Profile.scss";
import Profile_pic from "../../Components/Profile_pic/Profile_pic"

export default function Profile() {
  return (
    <div className="profile">
     <Profile_pic />
      <Selfintro />
    </div>
  );
}