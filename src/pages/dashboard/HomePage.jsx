import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SpotifyWebApi from "spotify-web-api-node";
import TopMusic from "../../components/TopMusic";
import PlayBack from "../../components/PlayBack";
import { CLIENT_ID } from "../../hooks/useEnv";
import Cards from "../../components/Cards";
import ChillMix from "../../assets/images/ChillMix.png";
import DailyMix1 from "../../assets/images/DailyMix1.png";
import FolkAcousticMix from "../../assets/images/FolkAcousticMix.png";
import PopMix from "../../assets/images/PopMix.png";
import DailyMix5 from "../../assets/images/DailyMix5.png";
import DailyMix4 from "../../assets/images/DailyMix4.png";
import Settings from "../../components/Settings";
import { LeftIcon, RightIcon } from "../../assets/images/icon";

function HomePage({ accessToken }) {
  const [title, setTitle] = useState("");
  const [play, setPlay] = useState([]);
  const [playing, setPlaying] = useState(false);
  const [expandedArtist, setExpandedArtist] = useState(null);

  const navigate = useNavigate();
  const spotifyApi = new SpotifyWebApi({
    clientId: CLIENT_ID,
  });

  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  const handleSeeAll = (artist) => {
    setExpandedArtist(artist === expandedArtist ? null : artist);
  };

  const handleArtistClick = (artist, img, tracks) => {
    navigate("/play-list", {
      state: { artist, img, tracks },
    });
  };

  return (
    <>
      <div className="w-[80%] flex justify-between h-screen">
        <div className="w-[80%] overflow-y-auto h-screen home-wrapper">
          <div className="flex items-center space-x-2 ml-[32px] py-[20px] cursor-pointer">
            <LeftIcon />
            <RightIcon />
          </div>
          <h1 className="font-bold text-[39px] leading-[49.33px] ml-[32px] text-white mb-[29px]">
            Good Afternoon
          </h1>
          <div className=" flex items-center justify-around space-x-[32px]">
            <ul className="space-y-[16px] ">
              <Cards CardImg={ChillMix} CardTitle={"Chill Mix"} />
              <Cards CardImg={DailyMix1} CardTitle={"Daily Mix 1"} />
              <Cards
                CardImg={FolkAcousticMix}
                CardTitle={"Folk & Acoustic Mix"}
              />
            </ul>
            <ul className="space-y-[16px]">
              <Cards CardImg={PopMix} CardTitle={"Pop Mix"} />
              <Cards CardImg={DailyMix5} CardTitle={"Daily Mix 5"} />
              <Cards CardImg={DailyMix4} CardTitle={"DailyMix4"} />
            </ul>
          </div>
          <div className="flex flex-col">
            <TopMusic
              setPlaying={setPlaying}
              accessToken={accessToken}
              setPlay={setPlay}
              partTitle={"Xamdam Sobirov Qo'shiqlari"}
              searchText={"Xamdam"}
              showAll={expandedArtist === "Xamdam"}
              onArtistClick={handleArtistClick}
            />
            <button
              className="text-blue-500 hidden"
              onClick={() => handleSeeAll("Xamdam")}
            >
              {expandedArtist === "Xamdam" ? "See Less" : "See All"}
            </button>
          </div>

          <TopMusic
            setPlaying={setPlaying}
            accessToken={accessToken}
            setPlay={setPlay}
            partTitle={"Sherali Jo'rayev Qo'shiqlari"}
            searchText={"Sherali Jo'rayev"}
            showAll={expandedArtist === "Sherali Jo'rayev"}
            onArtistClick={handleArtistClick}
          />
          <button
            className="text-blue-500 hidden"
            onClick={() => handleSeeAll("Sherali Jo'rayev")}
          >
            {expandedArtist === "Sherali Jo'rayev" ? "See Less" : "See All"}
          </button>

          <TopMusic
            setPlaying={setPlaying}
            accessToken={accessToken}
            setPlay={setPlay}
            partTitle={"Ummon Qo'shiqlari"}
            searchText={"Ummon"}
            showAll={expandedArtist === "Ummon"}
            onArtistClick={handleArtistClick}
          />
          <button
            className="text-blue-500 hidden"
            onClick={() => handleSeeAll("Ummon")}
          >
            {expandedArtist === "Ummon" ? "See Less" : "See All"}
          </button>

          <TopMusic
            setPlaying={setPlaying}
            accessToken={accessToken}
            setPlay={setPlay}
            partTitle={"Jaloliddin Ahmadaliyev Qo'shiqlari"}
            searchText={"Jaloliddin Ahmadaliyev"}
            showAll={expandedArtist === "Jaloliddin Ahmadaliyev"}
            onArtistClick={handleArtistClick}
          />
          <button
            className="text-blue-500 hidden"
            onClick={() => handleSeeAll("Jaloliddin Ahmadaliyev")}
          >
            {expandedArtist === "Jaloliddin Ahmadaliyev"
              ? "See Less"
              : "See All"}
          </button>

          <PlayBack
            accessToken={accessToken}
            playing={playing}
            setPlaying={setPlaying}
            play={play}
          />
        </div>
        <div className="w-[20%]">
          <Settings />
        </div>
      </div>
    </>
  );
}

export default HomePage;
