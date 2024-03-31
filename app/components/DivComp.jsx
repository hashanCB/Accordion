"use client";
import React from "react";

const DivComp = ({ title, body, singal, mulit, reff, id }) => {
  return (
    <div
      id={id}
      className=" max-w-[400px] bg-yellow-600 justify-between flex flex-col p-5 cursor-pointer mx-auto "
      onClick={(e) => singal(e)}
    >
      <div className=" flex  justify-between ">
        <div>{title}</div>
        <div>+</div>
      </div>
      <div ref={reff} className=" text-justify pt-3  hidden ">
        {body}
      </div>
    </div>
  );
};

export default DivComp;
