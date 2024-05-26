import React, { useEffect } from "react";
import WeatherApp from "../assets/projects/Weather.jpg";
import IGreels from "../assets/projects/IGreels.png";
import ZeBook from "../assets/projects/ZeBook.png";
import TextUtils from "../assets/projects/TextUtils.png";
import Ide from "../assets/projects/ide.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });

  const Projects = () => [
    {
      id: 1,
      src: WeatherApp,
      desc: "It is a Weather application which shows temperatures of various cities across the globe made using REST API...",
      demo: "https://harshit-here19.github.io/Weather-App/",
      code: "https://github.com/Harshit-here19/Weather-App",
    },
    {
      id: 2,
      src: IGreels,
      desc: "This is an simple application used to download Instagram reels easily by just coping the link....",
      demo: "https://igreels.netlify.app/",
      code: "https://github.com/Harshit-here19/IGreels",
    },
    {
      id: 3,
      src: ZeBook,
      desc: "This application offers a wide variety of jokes with several categories, it also offer the random facts.",
      demo: "https://zebook.netlify.app/",
      code: "https://github.com/Harshit-here19/ZeBook",
    },
    {
      id: 4,
      src: Ide,
      desc: "ShadowCode is an online IDE used for python language...",
      demo: "https://shadowcode.netlify.app/",
      code: "https://github.com/Harshit-here19/shadowCode",
    },
    {
      id: 5,
      src: TextUtils,
      desc: "It is a text analyzer app which analyze, the number of words and letter does a word contain, it also has the multiple facility..",
      demo: "https://harshit-here19.github.io/TextUtils-react/",
      code: "https://github.com/Harshit-here19/TextUtils-react",
    },
  ];

  return (
    <div
      name="projects"
      className="h-auto bg-gradient-to-b from-black to-gray-800 w-full text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 flex flex-col justify-center items-center mx-auto">
          <h3 className="text-4xl pb-2 font-bold inline border-b-4 border-gray-400">
            Personal Projects
          </h3>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 mb-20 gap-8 px-12 sm:px-0">
          {Projects().map(({ id, src, desc, demo, code }) => (
            <div
              data-aos="fade-in"
              data-aos-duration="500"
              key={id}
              className="shadow-md shadow-gray-600 rounded-lg"
            >
              <img
                src={src}
                alt="Ai"
                className="rounded-md duration-200 hover:scale-105"
              />
              <p className="p-2 text-justify font-extralight">{desc}</p>
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-gradient-to-l from-gray-700 to-blue-900 rounded-md">
                  <a href={demo}>Demo</a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-gradient-to-l from-purple-900 to-gray-700 rounded-md">
                  <a href={code}>Code</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
