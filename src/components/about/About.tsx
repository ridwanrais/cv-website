import React from "react";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  const cardStyle =
    "about_card bg-color-bg-variant border border-transparent rounded-2xl flex flex-col items-center py-6 hover:bg-transparent hover:border-color-primary-variant cursor-default";

  const iconStyle = "text-color-primary text-2xl mb-4";

  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container grid grid-cols-[35%_50%] gap-[15%] md:grid-cols-1 md:gap-0 sm:grid-cols-1 sm:gap-0">
        <div className="about__me w-full aspect-square rounded-[2rem] grid place-items-center bg-gradient-to-r from-color-primary to-color-light sm:w-[65%] sm:mt-0 sm:mx-auto sm:mb-12 md:w-1/2 md:mt-8 md:mx-auto md:my-16">
          <div className="about__me-image rounded-[2rem] overflow-hidden rotate-12 hover:rotate-0 transition-all">
            <img src="src/assets/dummyPhotoAbout.jpg" alt="ABOUT IMAGE" />
          </div>
        </div>

        <div className="about__content sm:text-center">
          <div className="about__cards grid grid-cols-3 gap-6 sm:grid-cols-2 sm:gap-4">
            <article className={cardStyle}>
              <FaAward className={iconStyle} />
              <h5>Experience</h5>
              <small>1 Year Working</small>
            </article>
            <article className={cardStyle}>
              <FiUsers className={iconStyle} />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>
            <article className={cardStyle}>
              <VscFolderLibrary className={iconStyle} />
              <h5 className="text-[0.95rem]">Projects</h5>
              <small className="text-xs text-color-light">80+ Completed</small>
            </article>
          </div>

          <p className="mt-8 mb-10 text-color-light sm:my-6 sm:mx-0 md:mt-4 md:mb-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
