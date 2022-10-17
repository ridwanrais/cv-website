import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  const experienceChildStyle =
    "bg-color-bg-variant py-[2.4rem] px-20 rounded-[2rem] border border-transparent transition-all hover:bg-transparent hover:border-color-primary-variant cursor-default sm:w-full md:w-4/5 md:p-2 md:mx-auto sm:w-full";

  const h3Style = "text-center mb-8 text-color-primary";

  const experienceContentStyle = "grid grid-cols-2 gap-8 md:grid-cols-3 md:p-4";

  const experienceDetailStyle = "flex flex-col gap-4 md:mx-auto";

  const iconStyle = "mt-[6px] text-color-primary";

  return (
    <section className="" id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container grid grid-cols-2 gap-8 md:grid-cols-1 sm:gap-4">
        <div className={experienceChildStyle}>
          <h3 className={h3Style}>Frontend Development</h3>
          <div className={experienceContentStyle}>
            <article className={experienceDetailStyle}>
              <BsPatchCheckFill className={iconStyle} />
              <h4>HTML</h4>
              <small className="text-color-light">Experienced</small>
            </article>
            <article className={experienceDetailStyle}>
              <BsPatchCheckFill className={iconStyle} />
              <h4>CSS</h4>
              <small className="text-color-light">Intermediate</small>
            </article>
            <article className={experienceDetailStyle}>
              <BsPatchCheckFill className={iconStyle} />
              <h4>JavaScript</h4>
              <small className="text-color-light">Experienced</small>
            </article>
            <article className={experienceDetailStyle}>
              <BsPatchCheckFill className={iconStyle} />
              <h4>Tailwind</h4>
              <small className="text-color-light">Experienced</small>
            </article>
            <article className={experienceDetailStyle}>
              <BsPatchCheckFill className={iconStyle} />
              <h4>React</h4>
              <small className="text-color-light">Experienced</small>
            </article>
            <article className={experienceDetailStyle}>
              <BsPatchCheckFill className={iconStyle} />
              <h4>Vue</h4>
              <small className="text-color-light">Beginner</small>
            </article>
          </div>
        </div>

        <div className={experienceChildStyle}>
          <h3 className={h3Style}>Backend Development</h3>
          <div className={experienceContentStyle}>
            <article className={experienceDetailStyle}>
              <BsPatchCheckFill className={iconStyle} />
              <h4>NodeJS</h4>
              <small className="text-color-light">Experienced</small>
            </article>
            <article className={experienceDetailStyle}>
              <BsPatchCheckFill className={iconStyle} />
              <h4>MongoDB</h4>
              <small className="text-color-light">Intermediate</small>
            </article>
            <article className={experienceDetailStyle}>
              <BsPatchCheckFill className={iconStyle} />
              <h4>PHP</h4>
              <small className="text-color-light">Experienced</small>
            </article>
            <article className={experienceDetailStyle}>
              <BsPatchCheckFill className={iconStyle} />
              <h4>MySQL</h4>
              <small className="text-color-light">Experienced</small>
            </article>
            <article className={experienceDetailStyle}>
              <BsPatchCheckFill className={iconStyle} />
              <h4>PostgreSQL</h4>
              <small className="text-color-light">Beginner</small>
            </article>
            <article className={experienceDetailStyle}>
              <BsPatchCheckFill className={iconStyle} />
              <h4>Python</h4>
              <small className="text-color-light">Experienced</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
