import React, { useRef } from "react";

function Footer({ value, getMessages, setValue }) {
  function handleMouseClick() {
    getMessages();
    handleClearInput();
  }
  const inputRef = useRef(null);

  const handleClearInput = () => {
    inputRef.current.value = "";
  };
  return (
    <div className="w-[70%] flex flex-col justify-center items-center pt-5">
      <div className="flex items-center relative w-[100%] max-w-[750px]">
        <textarea
          className="w-[100%] border-none h-[45px] rounded-l-md bg-white bg-opacity-10 text-[15px] py-[10px] px-[15px]  focus:outline-none shadow-[rgba(0,0,0, 0.05) 0 54px 55px rgba(0,0,0, 0.05) 0 -12px 30px rgba(0,0,0, 0.05) 0 4px 6px rgba(0,0,0, 0.05) 0 12px 3px] "
          value={value}
          onChange={(e) => setValue(e.target.value)}
          ref={inputRef}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault(); // Prevent new line
              getMessages();
              handleClearInput();
            }
          }}
        />
        <div
          onClick={handleMouseClick}
          className="absolute right-[-26.5px] cursor-pointer text-[20px]  py-[7.5px] px-1 z-10 rounded-r-[5px] bg-[#07AEAF] duration-200"
          id="submit"
        >
          <p>➢</p>
        </div>
      </div>
      <p className="p-[10px] text-[11px] text-center leading-5 text-[rgba(255,255,255,0.5)]">
        Welcome to YieGPT, the intelligent chatbot designed to help you
        communicate more effectively. Whether you're looking to improve your
        language skills, or just need a friendly companion to chat with, YieGPT
        is here to assist you. Our state-of-the-art language model is trained on
        a vast amount of text data, allowing us to offer you personalized
        responses tailored to your unique needs. So don't be shy, start chatting
        with YieGPT today and experience the power of advanced natural language
        processing technology!
      </p>
    </div>
  );
}

export default Footer;
