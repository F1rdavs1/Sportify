import React, { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-node";
import { CLIENT_ID } from "../../hooks/useEnv";
import useDebounce from '../../hooks/useDebounce';
import Settings from "../../components/Settings";

function Search({ accessToken }) {
  const [searchTitle, setSearchTitle] = useState("");
  const searchTitleDebounce = useDebounce(searchTitle, 1000);
  const spotifyApi = new SpotifyWebApi({
    clientId: CLIENT_ID,
  });

  const [tracks, setTracks] = useState([]);
  const [artists, setArtists] = useState([]);
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    if (accessToken) {
      spotifyApi.setAccessToken(accessToken);
    }
  }, [accessToken]);

  useEffect(() => {
    if (accessToken && searchTitleDebounce) {
      spotifyApi.setAccessToken(accessToken);

      Promise.all([
        spotifyApi.searchTracks(searchTitleDebounce),
        spotifyApi.searchArtists(searchTitleDebounce),
        spotifyApi.searchPlaylists(searchTitleDebounce)
      ])
      .then(([tracksRes, artistsRes, playlistsRes]) => {
        setTracks(tracksRes.body.tracks.items);
        setArtists(artistsRes.body.artists.items);
        setPlaylists(playlistsRes.body.playlists.items);
      })
      .catch(err => {
        console.error("Xato:", err);
      });
    } else {
      setTracks([]);
      setArtists([]);
      setPlaylists([]);
    }
  }, [accessToken, searchTitleDebounce]);

  return (
    <div className="w-[80%] flex">    
      <div className="text-white p-5 overflow-y-auto h-screen w-[80%] search">
        <input
          type="text"
          placeholder="Search"
          value={searchTitle}
          onChange={(e) => setSearchTitle(e.target.value)}
          className="w-full p-3 rounded bg-gray-800"
        />

        <div className="mt-5">
          <div className="flex flex-wrap items-center justify-center space-y-2">
            {tracks.length > 0 ? (
              tracks.map(track => (
                <div key={track.id} className="p-3 mx-[4px] bg-gray-900 rounded-md">
                  <img className="w-[150px] mx-auto"
                    src={
                      track?.album?.images[0]?.url ||
                      "https://placehold.co/70x70?text=No+Image"
                    }
                    width={150}
                    alt="Album cover"
                  />
                  <p className="font-semibold">{track.name.slice(0, 20)}{track.name.length > 20 ? "..." : ""}</p>
                  <p className="text-sm text-gray-400">
                    by {track.artists.map(artist => artist.name.slice(0, 20) + (artist.name.length > 20 ? "..." : "")).join(", ")}
                  </p>
                </div>
              ))
            ) : ""}
          </div>
        </div>

        <div className="mt-5">
          <div className="flex flex-wrap justify-center space-x-2 space-y-2">
            {artists.length > 0 ? (
              artists.map(artist => (
                <div key={artist.id} className="p-3 bg-[yellow] text-[black] rounded-md">
                  <p className="font-semibold">
                    {artist.name.slice(0, 20)}{artist.name.length > 20 ? "..." : ""}
                  </p>
                </div>
              ))
            ) : ""}
          </div>
        </div>

        <div className="mt-5">
          <div className="space-y-2">
            {playlists.length > 0 ? (
              playlists.map(playlist => (
                <div key={playlist.id} className="p-3 bg-[#901616] rounded-md">
                  <p className="font-semibold">
                    {playlist.name.slice(0, 20)}{playlist.name.length > 20 ? "..." : ""}
                  </p>
                  <p className="text-sm text-gray-400">
                    {playlist.owner.display_name}{playlist.owner.display_name}
                  </p>
                </div>
              ))
            ) : ""}
          </div>
        </div>
      </div>
      <div className="w-[20%]">
        <Settings/>
      </div>
    </div>
  );
}

export default Search;
