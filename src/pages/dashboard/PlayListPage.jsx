import React from "react";
import { useLocation } from "react-router-dom";
import Settings from "../../components/Settings";
import {
  LeftIcon,
  MoreIcon,
  PlayIcon,
  RightIcon,
  SearchIcon,
  UplodeIcon,
  LikeIcon,
  ClockIcon,
} from "../../assets/images/icon";
import MusicCard from "../../components/MusicCard";

function PlayListPage() {
  const location = useLocation();
  const { artist, img, tracks } = location.state || {};

  return (
    <div className="w-full flex bg-gradient-to-b from-[#424242] to-[#121212] text-white">
      <div className="w-[80%] h-screen overflow-y-auto playlist">
        <div className="flex items-center gap-[22px] pl-[41px] py-[20px] bg-[#DDF628] shadow-md cursor-pointer">
          <LeftIcon />
          <RightIcon />
        </div>
        <div className="flex pl-[41px] mt-[28px]">
          <img
            className="w-[200px] h-[200px] object-cover"
            src={img}
            alt={`${artist}'s image`}
            width={297}
            height={297}
          />
          <div className="flex flex-col justify-end ml-[32px]">
            <h3 className="text-[16px] font-medium leading-[20px] text-gray-400">
              PUBLIC PLAYLIST
            </h3>
            <h1 className="font-black text-[48px] text-white leading-tight">
              {artist}
            </h1>
            <p className="mt-2 text-gray-400">
              Made for you - {tracks.length} songs, 2hr 1min
            </p>
          </div>
        </div>
        <div className="mt-[28px] pl-[41px] pr-[20px]">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-[22px] cursor-pointer">
              <PlayIcon />
              <LikeIcon />
              <UplodeIcon />
              <MoreIcon />
            </div>
            <div className="flex items-center">
              <SearchIcon />
              <h3>Custom order</h3>
            </div>
          </div>
          <table className="table-auto w-full text-left text-[16px]">
            <thead>
              <tr className="text-[#B3B3B3] border-b">
                <th className="py-[14px]">#</th>
                <th className="py-[14px]">Title</th>
                <th className="py-[14px]">Album</th>
                <th className="py-[14px]">
                  <ClockIcon />
                </th>
                <th className="py-[14px]"></th>
              </tr>
            </thead>
            <tbody className="space-y-4">
              {tracks?.map((track, index) => (
                <MusicCard index={index} track={track} key={index} />
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="w-[20%] h-screen bg-[#181818]">
        <Settings />
      </div>
    </div>
  );
}

export default PlayListPage;
