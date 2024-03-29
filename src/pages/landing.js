import React from "react";
import Hero from "../components/Hero";
import Courses from "../components/Courses";
import Navbar from "../components/Navbar";

function Landing() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Courses />
    </div>
  );
}

export default Landing;