import React, { useEffect } from "react";
import Dp from "../assets/dp.jpg";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-scroll";
import "../App.css";
import { HiOutlineMail } from "react-icons/hi";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });
  return (
    <div name="home" className="h-auto w-full mb-32">
      <div
        className="max-w-screen-lg mx-auto flex flex-col items-center
                            justify-center  px-4 md:flex-row"
      >
        <div className="flex flex-col md:flex-row md:justify-around justify-center items-center w-full ">
          <img
            src={Dp}
            alt="my profile"
            data-aos="fade-in"
            data-aos-duration="1000"
            className="mt-20 rounded-full cursor-pointer shadow-black md:w-1/3 w-1/2 my-5 hover:scale-105 duration-300 sm:ease-in"
          />
          <div className="md:pt-28 ">
            <h2
              data-aos="fade-in"
              data-aos-duration="1000"
              className="text-4xl sm:text-6xl mb-4 font-bold pt-4"
            >
              Harshit Sikarwar
            </h2>
            <h3
              data-aos="fade-up"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1000"
              className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-2xl font-black"
            >
              CSE'24 | Front-End Developer
            </h3>
            <p
              data-aos="fade-in"
              data-aos-delay="400"
              data-aos-duration="2000"
              className="text-gray-400 py-4 max-w-md w-full"
            >
              I'm a B.Tech 3rd year Student of Anand Engineering College
              Engineering College, Agra. With expertise in Development in
              ReactJs, NodeJs, MongoDB, & much more. As a dynamic and
              forward-thinking programmer, I'm committed to staying up to date
              with the latest trends and technologies in the field.
            </p>
            {/* <p
              data-aos="fade-in"
              data-aos-delay="800"
              data-aos-duration="2000"
              className="text-gray-400 py-4 max-w-md"
            >
              Co-Lead GDSC RKMGEC, Creator @codewithbiki, Google Cloud
              Facilitator, In-Charge E-Cell RKMGEC...
            </p> */}

            <div className="flex flex-row justify-center items-center gap-2 w-full">
              <Link
                to="projects"
                smooth="true"
                duration={500}
                data-aos="fade-up"
                data-aos-delay="1000"
                data-aos-duration="2000"
                className="group rounded bg-gradient-to-r from-blue-600 to-cyan-600 w-1/3 h-8 flex items-center justify-center cursor-pointer mt-5 mb-28"
              >
                Projects
                <span className="px-2 group-hover:rotate-90 duration-300">
                  <MdOutlineArrowRightAlt size={25} />
                </span>
              </Link>
              <a
                target="_blank"
                rel="noreferrer"
                href="mailto:harshitsikarwar232@gmail.com"
                smooth="true"
                duration={500}
                data-aos="fade-up"
                data-aos-delay="1000"
                data-aos-duration="2000"
                className="group hover:scale-105 rounded w-auto h-8 p-3 flex items-center bg-gradient-to-r from-indigo-600 via-purple-600 to-orange-600 justify-center cursor-pointer mt-5 mb-28"
              >
                <span className="pr-2">
                  <HiOutlineMail size={25} />
                </span>
                Hire Me
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/harshit-sikarwar-b26285204/"
                smooth="true"
                duration={500}
                data-aos="fade-up"
                data-aos-delay="1000"
                data-aos-duration="2000"
                className="group hover:scale-105 rounded w-auto h-8 px-1 flex items-center bg-none justify-center cursor-pointer mt-5 mb-28"
              >
                <span>
                  <BsLinkedin size={25}></BsLinkedin>
                </span>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/Harshit-here19"
                smooth="true"
                duration={500}
                data-aos="fade-up"
                data-aos-delay="1000"
                data-aos-duration="2000"
                className="group hover:scale-105 rounded w-auto h-8 px-1 flex items-center bg-none justify-center cursor-pointer mt-5 mb-28"
              >
                <span>
                  <BsGithub size={25}></BsGithub>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
