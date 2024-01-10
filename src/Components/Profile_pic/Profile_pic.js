import React from "react";
import profileImage from "../../assets/Photo/Profile/profile_1.png";
import "./Profile_pic.scss";

export default function Profile_pic() {
    return (
        <div className="profile_pic">
            <img src={profileImage} alt="Profile_pic" className="profile_pic-image" />
        </div>
    );
}