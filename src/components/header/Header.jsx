import React from "react";
import "./header.css";
import CTA from "./CTA";
import Me from "../../assets/Me.jpg";
import HeaderSocials from "./HeaderSocials";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <Typist avgTypingDelay={120} cursor={{ element: "_" }}>
          <span>
            {"hi, "}
            <span className="intro-name">{"fahad"}</span>
            {" here."}
          </span>
        </Typist>
        <div className="intro-subtitle">Data Engineer @ Mayo Clinic. AI/ML/DL enthusiast.</div>
        <div className="intro-desc">
          I'm a data engineer working at Mayo Clinic and based out of Florida. I have
          great interest in data engineering, data analytics, full-stack
          development, and everything in the realm of data.
        </div>

        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={Me} alt="me" />
        </div>
      </div>
    </header>
  );
};

export default Header;
