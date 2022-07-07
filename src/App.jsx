import React from "react";
import Header from "./components/header/Header.jsx";
import Nav from "./components/nav/Nav.jsx";
import About from "./components/about/About.jsx";
import Experience from "./components/experience/Experience.jsx";
// import Expertise from "./components/expertise/expertise.jsx";
import Projects from "./components/projects/Projects.jsx";
// import Recommendations from "./components/recommendations/Recommendations";
import Contact from "./components/contact/Contact.jsx";
import Footer from "./components/footer/Footer.jsx";

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      {/* <Expertise /> */}
      <Projects />
      {/* <Recommendations /> */}
      <Contact />
      <Footer />
    </>
  );
};

export default App;
