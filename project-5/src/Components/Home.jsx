import React from "react";
import Typewriter from "typewriter-effect";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {" "}
      {/* Container */}{" "}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600"> Hi, my name is </p>{" "}
        <h1 className="text-3xl sm:text-6xl font-bold text-[#ccd6f6]">
          MATI UL REHMAN{" "}
        </h1>{" "}
        <h4 className="text-2xl sm:text-4xl font-extrabold text-gradient  text-[#8892b0]">
          Embarking on a Creative Odyssey as a{" "}
          <Typewriter
            options={{
              strings: [
                "<span class='text-blue-500'>Student</span>",
                "<span class='text-green-500'>Developer</span>",
                "<span class='text-pink-500'>Designer</span>",
              ],
              autoStart: true,
              loop: true,
              delay: 100,
              deleteSpeed: 50,
              cursor: "",
            }}
          />{" "}
        </h4>{" "}
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I am a MERN Stack developer specializing in building and occasionally
          designing exceptional digital experiences.Currently, I’ am focused on
          building responsive full - stack web applications.{" "}
        </p>{" "}
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
            View Work{" "}
            <span className="group-hover:rotate-90 duration-300">
              <Link to="projects" smooth={true} duration={500}>
                <HiArrowNarrowRight className="ml-3 " />
              </Link>{" "}
            </span>{" "}
          </button>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default Home;
