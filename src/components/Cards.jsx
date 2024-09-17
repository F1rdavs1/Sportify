import React from "react";

function Cards({ CardImg, CardTitle }) {
  return (
    <li className="flex items-center gap-[21px] bg-[#3D3D83] w-[400px] rounded-[6px]">
      <img src={CardImg} alt="Image" width={82} height={82} />
      <h2 className="font-bold text-[20px] leading-[25.3px] text-white">
        {CardTitle}
      </h2>
    </li>
  );
}

export default Cards;
