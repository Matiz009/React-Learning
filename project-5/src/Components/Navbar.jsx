import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/logo.png";
import { Link } from "react-scroll";
//import ProfilePic from "../assets/mati.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed w-full h-[100px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img src={Logo} alt="Logo" style={{ width: "100px" }} />{" "}
      </div>{" "}
      <div>
        <ul className="hidden md:flex">
          {" "}
          <li className="px-5">
            <Link to="home" smooth={true} duration={500}>
              {" "}
              Home{" "}
            </Link>{" "}
          </li>{" "}
          <li className="px-5">
            {" "}
            <Link to="skills" smooth={true} duration={500}>
              {" "}
              Skills{" "}
            </Link>{" "}
          </li>{" "}
          <li className="px-5">
            {" "}
            <Link to="about" smooth={true} duration={500}>
              {" "}
              About{" "}
            </Link>{" "}
          </li>{" "}
          <li className="px-5">
            {" "}
            <Link to="projects" smooth={true} duration={500}>
              {" "}
              Projects{" "}
            </Link>{" "}
          </li>{" "}
          <li className="px-5">
            {" "}
            <Link to="contact" smooth={true} duration={500}>
              {" "}
              Contacts{" "}
            </Link>{" "}
          </li>{" "}
        </ul>{" "}
      </div>{" "}
      {/* <img
                                                                                                                                                                                                                                                                    src={ProfilePic}
                                                                                                                                                                                                                                                                    alt="profile"
                                                                                                                                                                                                                                                                    className="w-40 h-40 rounded-full absolute top-[300%] right-4 border-4 border-pink-400 shadow-lg transform -translate-y-1/2"
                                                                                                                                                                                                                                                                  /> */}{" "}
      <div onClick={handleClick} className="md:hidden z-10">
        {" "}
        {!nav ? (
          <FaBars style={{ cursor: "pointer" }} />
        ) : (
          <FaTimes style={{ cursor: "pointer" }} />
        )}{" "}
      </div>{" "}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        {" "}
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            {" "}
            Home{" "}
          </Link>{" "}
        </li>{" "}
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            {" "}
            Skills{" "}
          </Link>{" "}
        </li>{" "}
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            {" "}
            About{" "}
          </Link>{" "}
        </li>{" "}
        <li className="py-6 text-4xl">
          {" "}
          <Link
            onClick={handleClick}
            to="projects"
            smooth={true}
            duration={500}
          >
            {" "}
            Projects{" "}
          </Link>{" "}
        </li>{" "}
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            {" "}
            Contact{" "}
          </Link>{" "}
        </li>{" "}
      </ul>{" "}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/mati-ul-rehman-34031b1b7/"
            >
              Linkedin <FaLinkedin size={30} />{" "}
            </a>{" "}
          </li>{" "}
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="http://github.com/Matiz009"
            >
              Github <FaGithub size={30} />{" "}
            </a>{" "}
          </li>{" "}
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://mailto:iammatiz00@gmail.com"
            >
              Email <HiOutlineMail size={30} />{" "}
            </a>{" "}
          </li>{" "}
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/iammatiz/overlay/1635535646880/single-media-viewer/?profileId=ACoAADJqMSABm7RzDdyYglK9kIkkrRy1HToT6Uw"
            >
              Resume <BsFillPersonLinesFill size={30} />{" "}
            </a>{" "}
          </li>{" "}
        </ul>{" "}
      </div>{" "}
    </div>
  );
};

export default Navbar;
