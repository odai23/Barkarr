"use client";
import React, { useState } from "react";
import "../style/MenuPreview.css";

const images = [
  { src: "/images/Food-menu-1.jpg", label: "Food Menu" },
  { src: "/images/Food-menu-2.jpg", label: "Signature Plates" },
  { src: "/images/Drink-menu-1.jpg", label: "Drink Menu" },
  { src: "/images/Drink-menu-2.jpg", label: "Craft Cocktails" },
];

const MenuPreview = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const closeModal = () => setSelectedImage(null);

  return (
    <section className="menu-preview-section">
      <div className="menu-preview-header">
        <h2>DISCOVER OUR HANDCRAFTED MENUS</h2>
        <p>
          A fusion of tradition and creativity – explore our signature dishes
          and drinks through curated visuals.
        </p>
      </div>

      <div className="menu-preview-grid">
        {images.map((img, index) => (
          <div
            key={index}
            className="menu-preview-item"
            onClick={() => setSelectedImage(img.src)}>
            <img src={img.src} alt={img.label} />
            <span>{img.label}</span>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="image-modal-overlay" onClick={closeModal}>
          <img
            src={selectedImage}
            alt="Menu preview"
            className="image-modal-content"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the image
          />
        </div>
      )}
    </section>
  );
};

export default MenuPreview;
