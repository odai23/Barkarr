import React from "react";
import "../style/About_us.css";

const AboutUs = () => {
  return (
    <div id="about" className="about_sec">
      <div className="text_wrapper">
        <h1 className="about_heading">Why Us?</h1>
        <p className="about_text_above">
          Stepping into Barka feels like being transported to a sun-soaked
          Greek island, where the scent of grilled souvlaki and freshly baked
          pita fills the air. Our menu brings together the best of traditional
          Greek flavors, from tender meats and vibrant mezze to fresh, perfectly
          seasoned seafood that tastes like it came straight from the Aegean.
          Every dish is crafted with love, using authentic ingredients that
          honor our heritage.
        </p>
        <p className="about_text_right">
          Whether you're enjoying a plate of grilled octopus or sipping ouzo
          with friends, Barakto offers more than just a meal—it’s a celebration
          of Greek hospitality and the joy of good company.
        </p>
      </div>
      <div className="img_wrapper">
        <img
          className="about_img"
          src="/images/resto2.webp"
          alt="a bartender behind the bar"
        />
      </div>
    </div>
  );
};

export default AboutUs;
