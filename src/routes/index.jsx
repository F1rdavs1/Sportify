import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/dashboard/HomePage";
import PlayListPage from "../pages/dashboard/PlayListPage";
import LikedPage from "../pages/dashboard/LikedPage";
import Navbar from "../components/Navbar";

function CustomRoutes({ code }) {
  return (
    <>
      <div className="flex ">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage code={code} />} />
          <Route path="/play-list" element={<PlayListPage />} />
          <Route path="/liked" element={<LikedPage />} />
        </Routes>
      </div>
    </>
  );
}

export default CustomRoutes;
