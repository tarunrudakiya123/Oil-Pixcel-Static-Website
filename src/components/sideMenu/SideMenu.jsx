import React from "react";
import "./sideMenu.css";
import CloseIcon from "@mui/icons-material/Close"; // Adjust the import based on your icon library

const SideMenu = ({ isOpen, setIsOpen }) => {
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {isOpen && <div className="backdrop" onClick={toggleMenu}></div>}
      <div className={`sidenav ${isOpen ? "open" : ""}`}>
        <div className="sidenav-content">
          <button className="closebtn" onClick={toggleMenu}>
            <CloseIcon className="close-icon" />
          </button>

          <div className="row d-flex align-item-center">
            <div className="col-6">
              <nav className="menu-items">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Blog</a>
                <a href="#">Gallery</a>
                <a href="#">Services</a>
                <a href="#">Contact</a>
              </nav>
            </div>

            <div className="col-6">
              <div className="contact-info">
                <h2>GET IN TOUCH</h2>
                <p>
                  <strong>CALL US</strong>
                  <br />
                  +91 (79) 400 98 388
                </p>
                <p>
                  <strong>EMAIL US</strong>
                  <br />
                  paint@oilpixel.com
                </p>
                <div className="social-icons">
                  <i className="fab fa-facebook"></i>
                  <i className="fab fa-twitter"></i>
                  <i className="fab fa-pinterest"></i>
                  <i className="fab fa-instagram"></i>
                  <i className="fab fa-youtube"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideMenu;
