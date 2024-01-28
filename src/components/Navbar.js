import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";
import "../css/account.css";

const Navbar = () => {
  // State to manage the mobile navigation menu
  const [isOpen, setIsOpen] = useState(false);

  // Reference to the navigation container for handling clicks outside
  const navRef = useRef(null);

  // Function to toggle the mobile navigation menu
  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  // Function to close the mobile navigation menu when a link is clicked
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  // Function to handle clicks outside the navigation container and close the menu
  const handleClickOutside = (event) => {
    // Close the menu if clicked outside the navigation container
    if (navRef.current && !navRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  // Effect hook to add and remove click event listener for handling clicks outside
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div>
      {/* Include the CSS links */}
      <link
        rel="stylesheet"
        href="css/materialize.css"
        type="text/css"
        media="screen,projection"
      />
      <link
        rel="stylesheet"
        href="css/style.css"
        type="text/css"
        media="screen,projection"
      />

      {/* Navigation bar with desktop and mobile versions */}
      <nav className="blue" role="navigation">
        <div className="nav-wrapper container" ref={navRef}>
          {/* Brand logo */}
          <a id="logo-container" href="index.html" className="brand-logo">
            lrnr
          </a>

          {/* Desktop navigation links */}
          <ul className="right hide-on-med-and-down">
            <li>
              {/* Account link */}
              <a href="/account" onClick={handleLinkClick}>
                Account
              </a>
            </li>
            <li>
              {/* Quiz Generation link */}
              <a href="#" onClick={handleLinkClick}>
                Quiz Generation
              </a>
            </li>
          </ul>

          {/* Mobile navigation menu */}
          <ul
            id="nav-mobile"
            className={`sidenav ${isOpen ? "open" : ""}`}
            style={{
              // Toggle menu visibility using translateX
              transform: isOpen ? "translateX(0%)" : "translateX(-105%)",
            }}>
            <li>
              {/* Account link in mobile menu */}
              <a href="/account" onClick={handleLinkClick}>
                Account
              </a>
            </li>
            <li>
              {/* Quiz Generation link in mobile menu */}
              <a href="#" onClick={handleLinkClick}>
                Quiz Generation
              </a>
            </li>
          </ul>

          {/* Mobile menu trigger button */}
          <a
            href="#"
            data-target="nav-mobile"
            className="sidenav-trigger"
            onClick={toggleNav}>
            <i className="material-icons">menu</i>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
