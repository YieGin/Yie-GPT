import React from "react";
import { Link } from "react-router-dom";

function Sidebar({ createNewChat, uniqueTitles, handleClick, Image1 }) {
  return (
    <section className="bg-[#202123] h-screen gap-y-5 w-[244px] flex flex-col justify-between px-2">
      <Link className="flex flex-wrap mt-5" to="/">
        <div className="flex  gap-x-2">
          <div className="cube-loader">
            <div className="cube-top"></div>
            <div className="cube-wrapper">
              <span style={{ "--i": 0 }} className="cube-span"></span>
              <span style={{ "--i": 1 }} className="cube-span"></span>
              <span style={{ "--i": 2 }} className="cube-span"></span>
              <span style={{ "--i": 3 }} className="cube-span"></span>
            </div>
          </div>
          <div className="content_YieGPT">
            <h1 className="text-[19px] tracking-wide">YieGPT</h1>
          </div>
        </div>
        <div className="bg-[#03f7f7] h-[1px] w-[100%] mt-5"></div>
      </Link>
      <Link className="flex flex-wrap mt-5" to="/ImageGenerator">
        <div className="flex  gap-x-2">
          <div className="cube-loader">
            <div className="cube-top"></div>
            <div className="cube-wrapper">
              <span style={{ "--i": 0 }} className="cube-span"></span>
              <span style={{ "--i": 1 }} className="cube-span"></span>
              <span style={{ "--i": 2 }} className="cube-span"></span>
              <span style={{ "--i": 3 }} className="cube-span"></span>
            </div>
          </div>
          <div className="content_Generator">
            <h1 className="text-[19px] tracking-wide">Image Generator</h1>
          </div>
        </div>
        <div className="bg-[#03f7f7] h-[1px] w-[100%] mt-5"></div>
      </Link>
      <Link to="/">
        <button onClick={createNewChat} className="new_chat mt-5 pr-2 ">
          <span className="text-[30px] relative right-10 pb-2 text-[#03f7f7]">
            +
          </span>
          New chat
        </button>
      </Link>
      <div className="h-[100%] mt-2 w-[100%]">
        {uniqueTitles?.map((uniqueTitle, index) => (
          <div
            onClick={() => handleClick(uniqueTitle)}
            key={index}
            className="new_chat flex justify-center items-center px-5 text-center cursor-pointer mb-5"
          >
            <p className="w-[235px] font-normal max-h-[25px] text-gray-300 overflow-hidden text-[15px] ">
              {uniqueTitle}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Sidebar;
