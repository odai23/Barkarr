"use client";
import React from "react";
import "../style/PanoramaTour.css";

const PanoramaTour = () => {
  return (
    <section className="panorama-tour-section">
      <div className="video-overlay">
        <video
          className="background-video"
          src="/images/restaurant-tour.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="tour-text">
          <h2>STEP INSIDE BARKARR</h2>
          <p>Experience the heart of Greek hospitality in Prague.</p>
        </div>
      </div>
    </section>
  );
};

export default PanoramaTour;
