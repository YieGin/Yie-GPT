import React, { useEffect, useState } from "react";
import Image1 from "../../assets/1.svg";
import Image2 from "../../assets/Images/Ai.png";
import Image3 from "../../assets/Images/image.png";
import Image4 from "../../assets/like.svg";
import Image5 from "../../assets/save.svg";
import Image6 from "../../assets/dislike.svg";
import Footer from "./Footer";
import LandingPage from "./LandingPage";
import Sidebar from "./Sidebar";
function Home() {
  const [message, setMessage] = useState(null);
  const [value, setValue] = useState(null);
  const [previousChats, setPreviousChats] = useState([]);
  const [currentTitle, setCurrentTitle] = useState(null);

  const createNewChat = () => {
    setMessage(null);
    setValue("");
    setCurrentTitle(null);
  };

  const handleClick = (uniqueTitle) => {
    setCurrentTitle(uniqueTitle);
    setMessage(null);
    setValue("");
  };

  const getMessages = async () => {
    const options = {
      method: "POST",
      body: JSON.stringify({
        message: value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await fetch(
        "http://localhost:8080/completions",
        options
      );
      const data = await response.json();
      setMessage(data.choices[0].message);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (!currentTitle && value && message) {
      setCurrentTitle(value);
    }
    if (currentTitle && value && message) {
      setPreviousChats((prevChats) => [
        ...prevChats,
        {
          title: currentTitle,
          role: "YIE",
          content: value,
          like: Image3,
          save: Image3,
          dislike: Image3,
        },
        {
          title: currentTitle,
          role2: Image2,
          content: message.content,
          like: Image4,
          save: Image5,
          dislike: Image6,
        },
      ]);
    }
  }, [message, currentTitle]);

  const currentChat = previousChats.filter(
    (previousChat) => previousChat.title === currentTitle
  );
  const uniqueTitles = Array.from(
    new Set(previousChats.map((previousChat) => previousChat.title))
  );

  return (
    <div className="bg-[#343541] flex">
      <Sidebar
        createNewChat={createNewChat}
        uniqueTitles={uniqueTitles}
        handleClick={handleClick}
        Image1={Image1}
      />
      <section className="h-screen w-[100%] flex-col flex justify-between items-center text-center">
        <LandingPage currentChat={currentChat} />
        <Footer value={value} setValue={setValue} getMessages={getMessages} />
      </section>
    </div>
  );
}

export default Home;
