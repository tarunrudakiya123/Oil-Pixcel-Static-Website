import React, { useMemo, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Loader } from "./components/loader/Loader";
import Layout from "./Pages/layout/Layout";

// Lazy-loaded components-------------------------------|>
const HomeScreen = React.lazy(() => import("./Pages/homeScrren/HomeScrren"));

function App() {
  const routes = useMemo(
    () => (
      <Routes>
        <Route path="/" element={<Layout Component={<HomeScreen />} />} />
      </Routes>
    ),
    []
  );

  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>{routes} </Suspense>
    </BrowserRouter>
  );
}

export default App;
