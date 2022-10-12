import React from "react";
import {
  AiOutlineDribbble,
  AiOutlineLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";

const HeaderSocials = () => {
  return (
    <div className="header__socials flex justify-center mx-auto flex-col items-center gap-3 absolute left-0 bottom-12 after:content-[''] after:w-[1px] after:h-8 after:bg-color-primary sm:hidden">
      <a href="https://linkedin.com" target="_blank">
        <AiOutlineLinkedin />
      </a>
      <a href="https://github.com" target="_blank">
        <AiOutlineGithub />
      </a>
      <a href="https://dribble.com" target="_blank">
        <AiOutlineDribbble />
      </a>
    </div>
  );
};

export default HeaderSocials;
