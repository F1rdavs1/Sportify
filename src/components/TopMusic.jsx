import React, { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-node";
import { CLIENT_ID } from "../hooks/useEnv";

function TopMusic({
  searchText,
  partTitle,
  accessToken,
  onArtistClick,
}) {
  const spotifyApi = new SpotifyWebApi({
    clientId: CLIENT_ID,
  });

  const [tracks, setTracks] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    if (!accessToken || !searchText) return;
    spotifyApi.setAccessToken(accessToken);

    spotifyApi
      .searchTracks(searchText)
      .then((res) => {
        setTracks(
          res.body.tracks.items.map((item) => {
            const data = {
              img:
              item.album.images[0]?.url || "https://via.placeholder.com/182",
              artistName: item.artists[0].name,
              trackName: item.name,
              uri: item.uri,
            };
            return data;
          })
        );
      })
      .catch((err) => console.error("Xatolik: ", err));
  }, [accessToken, searchText]);

  function handleArtistNameClick(artistName, img, tracks) {
    onArtistClick(artistName, img, tracks);
  }

  const displayedTracks = showAll ? tracks : tracks.slice(0, 4);

  return (
    <div className="p-5 mb-[50px]">
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-white mb-[26px] text-[25px]">
          {partTitle}
        </h2>
        <button
          className="text-[#ADADAD] uppercase font-bold text-[16px] leading-[20.24px]  hover:underline"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "See Less" : "See All"}
        </button>
      </div>
      <div className="flex gap-5 overflow-x-auto">
        {displayedTracks.map((item, index) => (
          <div
            onClick={() => handleArtistNameClick(item.artistName, item.img, tracks)}
            className="min-w-[200px] cursor-pointer card-bg p-5 rounded-[8px] duration-300"
            key={index}
          >
            <img
              className="mb-[25px] rounded-[8px]"
              src={item.img}
              alt="top music img"
              width={182}
              height={182}
            />
            <div className="flex flex-col">
              <h2 className="text-white font-bold text-[20px] line-clamp-1 mb-2">
                {item.trackName}
              </h2>
              <strong className="text-white cursor-pointer">
                {item.artistName}
              </strong>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopMusic;
