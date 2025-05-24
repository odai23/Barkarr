"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import "../style/Navbar.css";

const Navbar = () => {
  const alaCartePopupRef = useRef(null);
  const alaCarteLinkRef = useRef(null);

  const reservationPopupRef = useRef(null);
  const reservationLinkRef = useRef(null);

  const togglePopup = (popupRef) => {
    const popup = popupRef.current;
    popup?.classList.toggle("show");
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      const alaCartePopup = alaCartePopupRef.current;
      const alaCarteLink = alaCarteLinkRef.current;

      const reservationPopup = reservationPopupRef.current;
      const reservationLink = reservationLinkRef.current;

      if (
        alaCartePopup?.classList.contains("show") &&
        !alaCartePopup.contains(e.target) &&
        !alaCarteLink.contains(e.target)
      ) {
        alaCartePopup.classList.remove("show");
      }

      if (
        reservationPopup?.classList.contains("show") &&
        !reservationPopup.contains(e.target) &&
        !reservationLink.contains(e.target)
      ) {
        reservationPopup.classList.remove("show");
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <nav id="home" className="navbar-container">
      <div className="logo">
        <img className="logo_footer" src="./images/barkalogo.png" alt="Logo" />
      </div>
      <div className="logo-text">
        We're here to introduce the original Tavern experience in Prague! In our
        cozy atmosphere, enjoy a mezze-style of dining inspired by the Greek
        Cyclades. Indulge in authentic Mediterranean flavors, crafted with fresh
        Greek ingredients and traditional recipes. Experience the warm
        hospitality and the true essence of Greek cuisine.
      </div>
      <ul className="nav-list">
        <li>
          <a href="#">Home</a>
        </li>
        <li className="reservation-link">
          <a href="#menu-preview">Ala Carte Menu</a>
        </li>
        {/* <li>
          <a href="/menu">FOOD MENU GALLERY</a>
        </li> */}

        <li className="reservation-link" ref={reservationLinkRef}>
          <a
            onClick={(e) => {
              e.preventDefault();
              togglePopup(reservationPopupRef);
            }}>
            Reservation
          </a>
          <div className="reservation-popup" ref={reservationPopupRef}>
            <a
              href="https://wa.me/420774153253"
              target="_blank"
              rel="noopener noreferrer">
              📞 Call us: +420 774 153 253
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=info@barkarr.cz"
              target="_blank"
              rel="noopener noreferrer">
              📧 Email us: info@barkarr.cz
            </a>
          </div>
        </li>
        <li>
          <Link href="/products">Products</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
