import React from "react";
import Fade from "@mui/material/Fade";
import { Typography } from "@mui/material";
import EmailIcon from "../../assets/icon/email.png";
import LinkinIcon from "../../assets/icon/linkin.png";
import GithubIcon from "../../assets/icon/Github.png";
import PhoneIcon from "../../assets/icon/phone.png";
import "./ContactData.scss";

const ContactData = () => {
  const EducationData = [
    {
      Type: "Phone",
      Icon: PhoneIcon,
      contact: "519-729-2988",
    },
    {
      Type: "Email",
      Icon: EmailIcon,
      contact: "lee.dinhkienly1005@gmail.com",
    },
    {
      Type: "Linkin",
      Icon: LinkinIcon,
      contact: "https://linkedin.com/in/dinh-ly-624b06180",
    },
    {
      Type: "Github",
      Icon: GithubIcon,
      contact: "https://github.com/KDinhL",
    },
  ];

  const handleContactClick = (contact) => {
    switch (contact.Type) {
      case "Phone":
        window.location.href = `tel:${contact.contact}`;
        break;
      case "Email":
        window.location.href = `mailto:${contact.contact}`;
        break;
      case "Linkin":
      case "Github":
        window.open(contact.contact, "_blank");
        break;
      default:
        break;
    }
  };

  return (
    <div className="contact-data">
      {EducationData.map((item, index) => (
        <Fade key={index} in={true} timeout={1000 * (index + 1)}>
          <div
            className="contact-item"
            onClick={() => handleContactClick(item)}
          >
            <img src={item.Icon} alt={item.Type} className="contact-icon" />

            <Typography variant="body1" className="contact-info">
              {item.contact}
            </Typography>
          </div>
        </Fade>
      ))}
    </div>
  );
};

export default ContactData;