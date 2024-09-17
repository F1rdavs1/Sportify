import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  HomeIcon,
  LibraryIcon,
  LikedIcon,
  PlaylistIcon,
  SearchIcon,
} from "../assets/images/icon";

const Modal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70">
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <h2 className="text-lg font-bold mb-4">Search</h2>
        <input
          type="text"
          className="border border-gray-300 p-2 w-full"
          placeholder="Search for songs, artists, or playlists..."
        />
        <button
          className="mt-4 text-red-500 hover:text-red-700"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

function Navbar() {

  return (
    <div className="w-[20%] col-span-2 h-screen bg-black overflow-y-auto navbar-wrapper pl-[30px]">
      <ul className="mt-[70px] ">
        <NavLink to={"/"}>
          <div className="flex items-center gap-4 text-white font-bold mb-[20px] ">
            <HomeIcon />
            <p className="text-18px leading-6">Home</p>
          </div>
        </NavLink>
        <NavLink to={'/search'} >
          <div className="flex items-center gap-4 text-white font-bold mb-[20px] ">
            <SearchIcon />
            <p className="text-18px leading-6">Search</p>
          </div>
        </NavLink>
        <div>
          <div className="flex items-center gap-4 text-white font-bold mb-[50px] ">
            <LibraryIcon />
            <p className="text-18px leading-6">Your Library</p>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-4 text-white font-bold mb-[20px] ">
            <PlaylistIcon />
            <p className="text-18px leading-6">Create Playlist</p>
          </div>
        </div>
        <NavLink to={'/liked'}>
          <div className="flex items-center gap-4 text-white font-bold mb-[20px] ">
            <LikedIcon />
            <p className="text-18px leading-6">Liked Songs</p>
          </div>
        </NavLink>
      </ul>
      <div className="border-t-[1px] border-[#282828] h-screen pt-[22px] font-450 text-[18px] leading-[22.77px] text-[#B3B3B3] space-y-[18px] cursor-pointer">
        <span className="block">Chill Mix</span>
        <span className="block"> Insta Hits</span>
        <span className="block">Your Top Songs 2021</span>
        <span className="block">Mellow Songs</span>
        <span className="block">Anime Lofi & Chillhop Music</span>
        <span className="block">BG Afro “Select” Vibes</span>
        <span className="block">Afro “Select” Vibes</span>
        <span className="block">Happy Hits!</span>
        <span className="block">Deep Focus</span>
        <span className="block">Instrumental Study</span>
        <span className="block">OST Compilations</span>
        <span className="block">Nostalgia for old souled mill...</span>
        <span className="block">Mixed Feelings</span>
      </div>
    </div>
  );
}

export default Navbar;
