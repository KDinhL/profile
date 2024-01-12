import React from "react";
import "./Contact.scss";
import Profile_pic from "../../Components/Profile_pic/Profile_pic"
import ContactData from"../../Components/ContactData/ContactData"

export default function Contact() {
  return (
    <div className="contact">
       {/* eslint-disable-next-line react/jsx-pascal-case */}
<Profile_pic />
     <ContactData/>
    </div>
  );
}