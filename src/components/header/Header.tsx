import React from "react";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header className="h-screen pt-28 overflow-hidden  md:h-[68vh] sm:h-[100vh]">
      <div className="container text-center h-full relative">
        <h5>Hello I'm</h5>
        <h1>Ridwan Rais</h1>
        <h5 className="text-color-light">Backend Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me bg-color-primary w-[22rem] h-[30rem] absolute left-[calc(50%-11rem)] mt-16 rounded-t-full bg-gradient-to-b from-color-primary to-color-light overflow-hidden pt-20">
          <img src="src/assets/dummyPhoto1.png" alt="" />
        </div>

        <a
          href="#contact"
          className="scroll__down absolute right-[-1.5rem] bottom-20 rotate-90 font-extralight text-sm sm:hidden"
        >
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
