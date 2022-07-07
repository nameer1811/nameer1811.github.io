import React from "react";
import "./header.css";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/sheikhfahad1811/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/nameer1811" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
      <a href="mailto:nameer.fahad@gmail.com" target="_blank" rel="noreferrer">
        <MdEmail />
      </a>
    </div>
  );
};

export default HeaderSocials;
