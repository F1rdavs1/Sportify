import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/dashboard/HomePage";
import PlayListPage from "../pages/dashboard/PlayListPage";
import LikedPage from "../pages/dashboard/LikedPage";
import Navbar from "../components/Navbar";
import Search from "../pages/dashboard/Search";
import { useAuth } from "../hooks/useAuth";
import SpotifyWebApi from "spotify-web-api-node";
import { CLIENT_ID } from "../hooks/useEnv";

function CustomRoutes({ code }) {
  const accessToken = useAuth(code);
  const spotifyApi = new SpotifyWebApi({
    clientId: CLIENT_ID,
  });
  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);
  return (
    <>
      <div className="flex ">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage accessToken={accessToken} />} />
          <Route path="/play-list" element={<PlayListPage />} />
          <Route path="/liked" element={<LikedPage />} />
          <Route
            path="/search"
            element={<Search accessToken={accessToken} />}
          />
        </Routes>
      </div>
    </>
  );
}

export default CustomRoutes;
