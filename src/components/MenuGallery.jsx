"use client";
import React, { useState } from "react";
import "../style/MenuGallery.css";
import Link from "next/link";

const imageData = [
  {
    src: "/images/menu1.webp",
    description: "Traditional Greek Moussaka layered with eggplant and beef.",
    price: "180 CZK",
  },
  {
    src: "/images/menu2.webp",
    description: "Fresh tzatziki with homemade pita bread.",
    price: "90 CZK",
  },
  {
    src: "/images/menu3.webp",
    description: "Grilled lamb chops otatoes.",
    price: "250 CZK",
  },
  {
    src: "/images/menu4.webp",
    description: "Grilled lamb chops with rosemary potatoes.",
    price: "250 CZK",
  },
  {
    src: "/images/menu5.webp",
    description: "Traditional Greek Moussaka layered with eggplant and beef.",
    price: "250 CZK",
  },
  {
    src: "/images/menu6.webp",
    description: "Grilled lamb chops with rosemary potatoes.",
    price: "250 CZK",
  },
  {
    src: "/images/menu7.webp",
    description: "Grilled lamb chops with rosemary potatoes.",
    price: "250 CZK",
  },
  {
    src: "/images/menu8.webp",
    description: "Traditional Greek Moussaka layered with eggplant and beef.",
    price: "250 CZK",
  },
  {
    src: "/images/menu9.webp",
    description: "Traditional Greek Moussaka layered with eggplant and beef..",
    price: "250 CZK",
  },
  {
    src: "/images/menu10.webp",
    description: "Grilled lamb chops with rosemary potatoes.",
    price: "250 CZK",
  },
  {
    src: "/images/menu11.webp",
    description: "Grilled lamb chops with rosemary .",
    price: "250 CZK",
  },
  {
    src: "/images/menu12.webp",
    description: "Traditional Greek Moussaka layered with eggplant and beef.",
    price: "250 CZK",
  },
  {
    src: "/images/menu13.webp",
    description: "Grilled lamb chops with rosemary potatoes.",
    price: "250 CZK",
  },
  {
    src: "/images/menu14.webp",
    description: "GTraditional Greek Moussaka layered with eggplant and beef.",
    price: "250 CZK",
  },
  {
    src: "/images/menu15.webp",
    description: "Traditional Greek Moussaka layered with eggplant and beef.",
    price: "250 CZK",
  },
  {
    src: "/images/menu16.webp",
    description: "Grilled lamb chops with rosemary potatoes.",
    price: "250 CZK",
  },
  {
    src: "/images/menu17.webp",
    description: "Grilled lamb chops with rosemary potatoes.",
    price: "20 CZK",
  },
  {
    src: "/images/menu18.webp",
    description: "Grilled lamb chops with rosemary potatoes.",
    price: "56 CZK",
  },
  {
    src: "/images/menu19.webp",
    description: "Traditional Greek Moussaka layered with eggplant and beef..",
    price: "455 CZK",
  },
  {
    src: "/images/menu20.webp",
    description: "Grilled lamb chops with rosemary potatoes.",
    price: "654 CZK",
  },
  {
    src: "/images/menu21.webp",
    description: "Grilled lamb chops with rosemary potatoes.",
    price: "234 CZK",
  },
  {
    src: "/images/menu22.webp",
    description: "Grilled lamb chops with rosemary potatoes.",
    price: "654 CZK",
  },
  {
    src: "/images/menu23.webp",
    description: "Traditional Greek Moussaka layered with eggplant and beef.",
    price: "123 CZK",
  },
  {
    src: "/images/menu24.webp",
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
      <div id="MenuGallery" className="menu-header">
        <Link href="/">
          <button className="go-home-button">← Go Back Home</button>
        </Link>
        <h1 className="menu-title">
          A UNIQUE DINING EXPERIENCE IN THE HEART OF PRAGUE
        </h1>
        <p className="menu-description">
          Our menu features a wide range of classic Greek dishes, from matzo
          ball soup and gefilte fish to succulent brisket and perfectly roasted
          chicken. We use only the freshest, highest quality ingredients to
          ensure that every dish we serve is bursting with flavor.
        </p>
        <div className="menu-cta-link">
          <span className="cta-text">Check out our menu</span>
          <div className="underline"></div>
          <div className="arrow">↓</div>
        </div>
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
