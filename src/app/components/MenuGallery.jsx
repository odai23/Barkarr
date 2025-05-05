"use client";
import React, { useState } from "react";
import "../style/MenuGallery.css";

const imageData = Array.from({ length: 24 }, (_, i) => ({
  src: `/images/menu${i + 1}.jpg`,
  description: `Delicious dish number ${i + 1}`,
  price: `${150 + i * 5} CZK`,
}));

const MenuGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      setSelectedImage(null);
    }
  };

  return (
    <>
      <div className="menu-header">
        <h1 className="menu-title">
          A UNIQUE DINING EXPERIENCE IN THE HEART OF PRAGUE
        </h1>
        <p className="menu-description">
          Our menu features a wide range of classic Greek dishes, from matzo
          ball soup and gefilte fish to succulent brisket and perfectly roasted
          chicken. We use only the freshest, highest quality ingredients to
          ensure that every dish we serve is bursting with flavor.
        </p>
      </div>
      <section className="menu-gallery">
        {imageData.map((img, index) => (
          <div
            className="menu-item"
            key={index}
            onClick={() => setSelectedImage(img)}>
            <img src={img.src} alt={`Menu item ${index + 1}`} />
          </div>
        ))}
      </section>

      {selectedImage && (
        <div className="modal-overlay" onClick={handleOverlayClick}>
          <div className="modal-content">
            <img src={selectedImage.src} alt="Selected dish" />
            <p className="modal-description">{selectedImage.description}</p>
            <p className="modal-price">{selectedImage.price}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default MenuGallery;
