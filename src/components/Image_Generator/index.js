import React, { useState } from "react";
import Sidebar from "../Home/Sidebar";
import Images_slide from "../Images_slide";

function Image_Generator() {
  const [images, setImages] = useState(null);
  const [value, setValue] = useState(null);

  const getImages = async () => {
    try {
      const options = {
        method: "POST",
        body: JSON.stringify({
          message: value,
        }),
        headers: {
          "Content-type": "application/json",
        },
      };
      const response = await fetch("http://localhost:8080/images", options);
      const data = await response.json();
      console.log(data);
      setImages(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-[#343541] h-[100%] flex">
      <Sidebar />
      <div className=" flex flex-col gap-y-5 items-center w-[100%] ">
        <div className="content">
          <h1>Image Generator</h1>
        </div>
        <div>
          <div className="flex items-center relative w-[100%] max-w-[750px]">
            <div className="containerInput">
              {value !== null ? (
                <input
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  placeholder="enter"
                />
              ) : (
                <input
                  onChange={(e) => setValue(e.target.value)}
                  placeholder="enter"
                />
              )}
            </div>
            <div
              onClick={getImages}
              className="absolute right-0 top-0 cursor-pointer text-[20px] px-2 py-[11.9px] z-10 hover:bg-[#03f7f7] duration-200"
              id="submit"
            >
              <p>➢</p>
            </div>
          </div>
          <div onClick={getImages} className="buttons">
            <button className="btn">
              <span></span>
              <p
                data-start="good luck!"
                data-text="Generate!"
                data-title="Generate"
              ></p>
            </button>
          </div>
        </div>
        <Images_slide images={images} />
      </div>
    </div>
  );
}

export default Image_Generator;
