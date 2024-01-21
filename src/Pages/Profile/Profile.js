import React from "react";
import Selfintro from "../../Components/Selfintro/Selfintro";
import "./Profile.scss";
import Profile_pic from "../../Components/Profile_pic/Profile_pic"
import ContactData from "../../Components/ContactData/ContactData"; // Import ContactData

export default function Profile() {
  return (
    <div className="profile">
      <Profile_pic />
      <div className="desktop-and-tablet">
      <Selfintro />
      <div className="desktop-and-tablet-only">
        <ContactData />
      </div>
      </div>
    </div>
  );
}