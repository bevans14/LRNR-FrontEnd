import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";
import "../css/account.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

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

      <nav className="blue" role="navigation">
        <div className="nav-wrapper container" ref={navRef}>
          <a id="logo-container" href="index.html" className="brand-logo">
            lrnr
          </a>
          <ul className="right hide-on-med-and-down">
            <li>
              <a href="/account" onClick={handleLinkClick}>
                Account
              </a>
            </li>
            <li>
              <a href="#" onClick={handleLinkClick}>
                Quiz Generation
              </a>
            </li>
          </ul>

          <ul
            id="nav-mobile"
            className={`sidenav ${isOpen ? "open" : ""}`}
            style={{
              transform: isOpen ? "translateX(0%)" : "translateX(-105%)",
            }}>
            <li>
              <a href="/account" onClick={handleLinkClick}>
                Account
              </a>
            </li>
            <li>
              <a href="#" onClick={handleLinkClick}>
                Quiz Generation
              </a>
            </li>
          </ul>
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
