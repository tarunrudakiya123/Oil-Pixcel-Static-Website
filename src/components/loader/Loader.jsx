import React from "react";
import { Box } from "@mui/material";
import "./loader.css";

export const Loader = () => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    }}
  >
    <div className="loader">
      <div className="loader-text">RECENT MEMORIES</div>
      <div className="loader-line"></div>
    </div>
  </Box>
);
