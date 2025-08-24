import React from "react";
import aboutslider from "../assets/aboutslider.jpg";

function About() {
  // About sayfası içeriğine bir slider atanacak.
  return (
    <div id="singleSlider" className="carousel slide " data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={aboutslider} className="d-block w-100" alt="Slider" />
        </div>
      </div>
    </div>
  );
}

export default About;
