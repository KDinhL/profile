import React from "react";
import Graduate from "../../Components/Graduate/Graduate";
import "./Achievement.scss";
import Profile_pic from "../../Components/Profile_pic/Profile_pic"

export default function Profile() {
  return (
    <div className="achievement">
       {/* eslint-disable-next-line react/jsx-pascal-case */}
<Profile_pic />
      <Graduate />
    </div>
  );
}