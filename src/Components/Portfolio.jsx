import React from "react";
import "../Styles/Portfolio.css";
import Testimonials from "./Testomonials";
import Contact from "./Contact";
import Project from "./Project";

export default function Portfolio(){

    return(
       
              <div className="portfolio">
      <h1>My Portfolio</h1>
      <Project
        title="My Plumber "
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        image="project1.jpg"
      />
      <Project
        title="Project 2"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        image="project2.jpg"
      />
      {/* Add more projects as needed */}
      <Testimonials />
      <Contact />
    </div>
        
    )
}