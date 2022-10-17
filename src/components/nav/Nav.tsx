import React from "react";
import {
  AiOutlineBook,
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineContacts,
} from "react-icons/ai";
import { RiServiceLine } from "react-icons/ri";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  // const linkStyle = `bg-transparent p-[0.9rem] rounded-full flex text-color-light hover:bg-color-primary-variant active:bg-color-bg active:text-color-white ${
  //   activeNav === "#" ? "bg-color-primary-variant text-color-white" : ""
  // }`;

  const linkStyle = `bg-transparent p-[0.9rem] rounded-full flex text-color-light hover:bg-color-primary-variant`;
  const activeStyle =
    " bg-color-primary text-color-bg hover:bg-color-primary hover:text-color-bg";

  const homeLinkStyle = linkStyle + (activeNav === "#" ? activeStyle : "");
  const aboutLinkStyle =
    linkStyle + (activeNav === "#about" ? activeStyle : "");
  const experienceLinkStyle =
    linkStyle + (activeNav === "#experience" ? activeStyle : "");
  const servicesLinkStyle =
    linkStyle + (activeNav === "#services" ? activeStyle : "");
  const contactLinkStyle =
    linkStyle + (activeNav === "#contact" ? activeStyle : "");

  return (
    <nav className="flex block opacity-50 w-max py-[0.7rem] px-[1.7rem] z-10 fixed left-1/2 translate-x-[-50%] bottom-8 gap-3 rounded-[3rem] backdrop-blur-lg bg-color-bg-variant">
      <a className={homeLinkStyle} href="#" onClick={() => setActiveNav("#")}>
        <AiOutlineHome />
      </a>
      <a
        className={aboutLinkStyle}
        href="#about"
        onClick={() => setActiveNav("#about")}
      >
        <AiOutlineUser />
      </a>
      <a
        className={experienceLinkStyle}
        onClick={() => setActiveNav("#experience")}
        href="#experience"
      >
        <AiOutlineBook />
      </a>
      <a
        className={servicesLinkStyle}
        onClick={() => setActiveNav("#services")}
        href="#services"
      >
        <RiServiceLine />
      </a>
      <a
        className={contactLinkStyle}
        onClick={() => setActiveNav("#contact")}
        href="#contact"
      >
        <AiOutlineContacts />
      </a>
    </nav>
  );
};

export default Nav;
