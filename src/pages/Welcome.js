import React from "react";
import Hero from "../components/Hero";
import Courses from "../components/Courses";
import Navbarw from "../components/Navbarw";

function Welcome() {
  return (
    <div className="font-sans">
      <Navbarw />
      <Hero />
      <Courses />
    </div>
  );
}

export default Welcome;