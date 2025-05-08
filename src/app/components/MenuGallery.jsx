"use client";
import React, { useState } from "react";
import "../style/MenuGallery.css";

const imageData = [
  {
    src: "/images/menu1.jpg",
    description: "Traditional Greek Moussaka layered with eggplant and beef.",
    price: "180 CZK",
  },
  {
    src: "/images/menu2.jpg",
    description: "Fresh tzatziki with homemade pita bread.",
    price: "90 CZK",
  },
  {
    src: "/images/menu3.jpg",
    description: "Grilled lamb chops otatoes.",
    price: "250 CZK",
  },
  {
    src: "/images/menu4.jpg",
    description: "Grilled lamb chops with rosemary potatoes.",
    price: "250 CZK",
  },
  {
    src: "/images/menu5.jpg",
    description: "Traditional Greek Moussaka layered with eggplant and beef.",
    price: "250 CZK",
  },
  {
    src: "/images/menu6.jpg",
    description: "Grilled lamb chops with rosemary potatoes.",
    price: "250 CZK",
  },
  {
    src: "/images/menu7.jpg",
    description: "Grilled lamb chops with rosemary potatoes.",
    price: "250 CZK",
  },
  {
    src: "/images/menu8.jpg",
    description: "Traditional Greek Moussaka layered with eggplant and beef.",
    price: "250 CZK",
  },
  {
    src: "/images/menu9.jpg",
    description: "Traditional Greek Moussaka layered with eggplant and beef..",
    price: "250 CZK",
  },
  {
    src: "/images/menu10.jpg",
    description: "Grilled lamb chops with rosemary potatoes.",
    price: "250 CZK",
  },
  {
    src: "/images/menu11.jpg",
    description: "Grilled lamb chops with rosemary .",
    price: "250 CZK",
  },
  {
    src: "/images/menu12.jpg",
    description: "Traditional Greek Moussaka layered with eggplant and beef.",
    price: "250 CZK",
  },
  {
    src: "/images/menu13.jpg",
    description: "Grilled lamb chops with rosemary potatoes.",
    price: "250 CZK",
  },
  {
    src: "/images/menu14.jpg",
    description: "GTraditional Greek Moussaka layered with eggplant and beef.",
    price: "250 CZK",
  },
  {
    src: "/images/menu15.jpg",
    description: "Traditional Greek Moussaka layered with eggplant and beef.",
    price: "250 CZK",
  },
  {
    src: "/images/menu16.jpg",
    description: "Grilled lamb chops with rosemary potatoes.",
    price: "250 CZK",
  },
  {
    src: "/images/menu17.jpg",
    description: "Grilled lamb chops with rosemary potatoes.",
    price: "20 CZK",
  },
  {
    src: "/images/menu18.jpg",
    description: "Grilled lamb chops with rosemary potatoes.",
    price: "56 CZK",
  },
  {
    src: "/images/menu19.jpg",
    description: "Traditional Greek Moussaka layered with eggplant and beef..",
    price: "455 CZK",
  },
  {
    src: "/images/menu20.jpg",
    description: "Grilled lamb chops with rosemary potatoes.",
    price: "654 CZK",
  },
  {
    src: "/images/menu21.jpg",
    description: "Grilled lamb chops with rosemary potatoes.",
    price: "234 CZK",
  },
  {
    src: "/images/menu22.jpg",
    description: "Grilled lamb chops with rosemary potatoes.",
    price: "654 CZK",
  },
  {
    src: "/images/menu23.jpg",
    description: "Traditional Greek Moussaka layered with eggplant and beef.",
    price: "123 CZK",
  },
  {
    src: "/images/menu24.jpg",
    description: "Grilled lamb chops with rosemary potatoes.",
    price: "300 CZK",
  },
];

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
