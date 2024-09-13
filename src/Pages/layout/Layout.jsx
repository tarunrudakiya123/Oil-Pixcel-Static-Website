import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import SideMenu from "../../components/sideMenu/SideMenu";
import Footer from "../../components/footer/Fotter";

import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import "./layout.css";

const Layout = ({ Component }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.pageYOffset > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <SideMenu isOpen={isOpen} setIsOpen={setIsOpen} />

      {isOpen && <div className="overlay" onClick={() => setIsOpen(false)} />}

      <div className={`home-screen ${isOpen ? "overlay-open" : ""}`}>
        <div className="mainContainer">
          <main>{Component}</main>
        </div>

        {showBackToTop && (
          <button className="backTotopBtn" onClick={scrollToTop}>
            <ArrowUpwardIcon style={{ color: "white" }} />
          </button>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
