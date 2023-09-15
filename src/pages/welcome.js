import React from "react";
import Hero from "../components/Hero";
import Courses from "../components/Courses";

function welcome() {
  return (
    <div className="font-sans">
      <Hero />
      <Courses />
    </div>
  );
}

export default welcome;
