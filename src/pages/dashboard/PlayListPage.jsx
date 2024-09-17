import React, { useState } from "react";
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
  LikeRedIcon,
  ClockIcon,
} from "../../assets/images/icon";

function PlayListPage() {
  const location = useLocation();
  const { artist, img, tracks } = location.state || {};
  const [likedTracks, setLikedTracks] = useState({});

  const handleLikeTrack = (trackId) => {
    setLikedTracks((prev) => ({
      ...prev,
      [trackId]: !prev[trackId],
    }));
  };

  return (
    <div className="w-full flex bg-gradient-to-b from-[#424242] to-[#121212] text-white">
      <div className="w-[80%] h-screen overflow-y-auto playlist">
        <div className="flex items-center gap-[22px] pl-[41px] py-[20px] bg-[#DDF628] shadow-md">
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
              Made for you - 34 songs, 2hr 1min
            </p>
          </div>
        </div>
        <div className="mt-[28px] pl-[41px] pr-[20px]">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-[22px]">
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
                <tr key={index} className="text-white">
                  <td className="py-[14px]">{index + 1}</td>
                  <td className="flex items-center gap-3 py-[14px]">
                    <img
                      src={track.img}
                      alt="Track album"
                      className="w-[50px] h-[50px] object-cover rounded-md"
                    />
                    <div>
                      <h3>
                        {track.trackName.length > 10
                          ? `${track.trackName.slice(0, 10)}...`
                          : track.trackName}
                      </h3>
                      <p className="text-gray-400">{track.artistName}</p>
                    </div>
                  </td>
                  <td className="py-[14px]">{track.albumName || "Album Name"}</td>
                  <td className="py-[14px] flex items-center space-x-4">
                    <button onClick={() => handleLikeTrack(track.id)}>
                      {likedTracks[track.id] ? <LikeRedIcon /> : <LikeIcon />}
                    </button>
                    <span>{track.duration || "3:45"}</span>
                  </td>
                </tr>
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
