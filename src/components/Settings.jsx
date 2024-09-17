import React from 'react'
import { AddIcon, CloseIcon } from '../assets/images/icon'
import Avatar from "../assets/images/avatar.png";

function Settings() {
  return (
    <div className="w-[100%] bg-[black] h-screen overflow-y-auto px-[20px] pt-[29px] mb-[39px]">
    <div className="flex items-center justify-between mb-[39px] ">
      <strong className="font-bold text-[20px] leading-[25.3px] text-[#CCCCCC]">
        Friend Activity
      </strong>
      <div className="flex items-center cursor-pointer space-x-[6px]">
        <AddIcon />
        <CloseIcon />
      </div>
    </div>
    <h2 className="font-450 text-[18px] leading-[24px] text-[#CCCCCC]">
      Let friends and followers on Spotify see what you’re listening to.
    </h2>
    <div className="space-y-[20px] my-[21px] cursor-pointer">
      <img src={Avatar} alt="Avatar" />
      <img src={Avatar} alt="Avatar" />
      <img src={Avatar} alt="Avatar" />
    </div>
    <p className="font-450 text-[18px] leading-[24px] text-[#CCCCCC]">
      Go to Settings Social and enable “Share my listening activity on
      Spotify.’ You can turn this off at any time.
    </p>
    <button className="bg-white font-bold text-[18px] leading-[22.77px] text-[#171717] py-[20px] px-[64px] rounded-[40px] mt-[23px]">
      SETTINGS
    </button>
  </div>
  )
}

export default Settings