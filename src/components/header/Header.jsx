import React, { useEffect, useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = ({ isOpen, setIsOpen }) => {
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Check if the user is scrolling down or up
      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsScrollingDown(true);
      } else {
        // Scrolling up
        setIsScrollingDown(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`headerMain ${isScrollingDown ? "hideHeader" : "showHeader"}`} id="stkyHead">
      <div className="container-fluid">
        <div className="logo pull-left">
          <a href="https://www.oilpixel.com/" title="Oilpixel">
            <img
              src="https://www.oilpixel.com/ast/themes/oilpixel/images/logo.svg"
              alt="Oilpixel"
            />
          </a>
        </div>

        <div className="headRight pull-right">
          <span className="paintIcon">
            <Link className="orderNow">Order Now</Link>
          </span>

          <div className="menuIcon" onClick={() => setIsOpen(true)}>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
