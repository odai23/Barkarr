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
        check out the best greek food experience in prague
      </div>
      <ul className="nav-list">
        <li>
          <a href="#">Home</a>
        </li>
        <li className="reservation-link">
          <a href="#menu-preview">Ala Carte Menu</a>
        </li>
        <li>
          <a href="/menu">FOOD MENU GALLERY</a>
        </li>
        <li>
          <Link href="/products">Products</Link>
        </li>
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
              href="mailto:info@barkarr.com"
              target="_blank"
              rel="noopener noreferrer">
              📧 Email us: info@barkarr.com
            </a>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
