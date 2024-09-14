import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./Pages/layout/Layout";
import HomeScreen from "./Pages/homeScrren/HomeScrren";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout Component={<HomeScreen />} />} />
      </Routes>{" "}
    </BrowserRouter>
  );
}

export default App;
