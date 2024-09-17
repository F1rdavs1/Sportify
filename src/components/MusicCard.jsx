import React, { useState } from 'react'
import { LikeIcon, LikeRedIcon } from '../assets/images/icon';

function MusicCard({index, track}) {
    const [likedTracks, setLikedTracks] = useState({});

  const handleLikeTrack = (trackId) => {
    setLikedTracks((prev) => ({
      ...prev,
      [trackId]: !prev[trackId],
    }));
  };
  return (
    <tr  className="text-white">
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
      <span>{"3:45"}</span>
    </td>
  </tr>
  )
}

export default MusicCard