import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebook,
  faInstagram,
  faPinterest,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const SocialIcons = () => {
  return (
    <div className="social-icons">
      <a href="https://www.facebook.com" aria-label="Facebook">
        <FontAwesomeIcon
          icon={faFacebook}
          style={{ color: "black", fontSize: "20px" }}
        />
      </a>
      <a href="https://www.instagram.com" aria-label="Instagram">
        <FontAwesomeIcon
          icon={faInstagram}
          style={{ color: "black", fontSize: "20px" }}
        />
      </a>
      <a href="https://www.pinterest.com" aria-label="Pinterest">
        <FontAwesomeIcon
          icon={faPinterest}
          style={{ color: "black", fontSize: "20px" }}
        />
      </a>
      <a href="https://www.youtube.com" aria-label="YouTube">
        <FontAwesomeIcon
          icon={faYoutube}
          style={{ color: "black", fontSize: "20px" }}
        />
      </a>
    </div>
  );
};

const Footer = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError(""); // Clear error when input changes
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setSuccess("Thank you for subscribing!");
    setEmail("");
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <h1 className="footer-title">STAY UPDATED</h1>

        <form onSubmit={handleSubmit} className="footerform">
          <Box sx={{ "& > :not(style)": { m: 2 } }}>
            <TextField
              id="input-with-icon-textfield"
              label="Enter your email"
              value={email}
              onChange={handleEmailChange}
              //   error={!!error}
              //   helperText={error}
              InputProps={{
                style: {
                  textAlign: "center",
                  color: "black",
                },
                classes: {
                  input: "custom-input",
                },
              }}
              InputLabelProps={{
                style: {
                  color: "black",
                  textAlign: "center",
                  width: "88%",
                  fontSize: "17px",
                  fontFamily: "Montserrat",
                },
                classes: {
                  focused: "custom-focused-label",
                },
                //   shrink: true,
              }}
              variant="standard"
              fullWidth
            />

            <button type="submit" className="site-btn submitButton">
              Sign up
            </button>
            {success && <p className="success-message">{success}</p>}
          </Box>
        </form>

        <nav className="footer-nav">
          <Link to="#">Self Portrait Paintings</Link>
          <Link to="#">Children Portrait Paintings</Link>
          <Link to="#">Family Portrait Paintings</Link>
          <Link to="#">Couple Portrait Painting</Link>
          <Link to="#">Photo Restoration Services</Link>
          <Link to="#">Make My Painting</Link>
          <Link to="#">Gallery</Link>
          <Link to="#">Testimonials</Link>
          <Link to="#">Press Releases</Link>
          <Link to="#">Faqs</Link>
          <Link to="#">Blog</Link>
          <Link to="#">Contact</Link>
          <Link to="#">Sitemap</Link>
        </nav>

        <div className="footer-social">
          <SocialIcons />
        </div>

        <div className="footer-bottom">
          <p>
            © 2024 Oilpixel Art Pvt. Ltd. All rights reserved. Developed by
            Tarun Rudakiya.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
