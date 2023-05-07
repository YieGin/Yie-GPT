import React from "react";

function LandingPage({ currentChat }) {
  return (
    <>
      <div className="overflow-y-scroll scrollbar-track-transparent h-[100%] p-0 w-[100%] flex flex-col">
        {currentChat?.map((Item, index) => (
          <div
            key={index}
            className={`flex my-[0px] ${
              index % 2 === 0
                ? "bg-[#444654] py-[20px]"
                : "bg-zinc-900 py-[50px]"
            }`}
          >
            <div className="bg-[#57FEFF] ml-[22%] rounded-[2px] mr-2 flex justify-center items-center h-7 w-8">
              <p className="w-[100vw] text-[15px] text-[#000] font-bold text-center ml-1 tracking-wider">
                {Item.role}
              </p>
              <img
                alt="logo role2"
                src={Item.role2}
                className="w-[25px] h-[25px] mr-1"
              />
            </div>
            <p
              className={`w-[50%] text-[14px] text-justify leading-[25px] ${
                index % 2 === 0 ? "text-[#E7E6DD" : "text-[#fff]"
              }`}
            >
              {Item.content}
            </p>
            <div className="flex ml-5 mt-1 gap-x-2">
              <img
                alt="logo like"
                src={Item.like}
                className="w-[20px] h-[20px] mr-1 cursor-pointer"
              />
              <img
                alt="logo dislike"
                src={Item.dislike}
                className="w-[20px] h-[20px] mr-1 cursor-pointer"
              />
              <img
                alt="logo save"
                src={Item.save}
                className="w-[20px] h-[20px] mr-1"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default LandingPage;
