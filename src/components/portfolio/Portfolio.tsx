import React from "react";

const Portfolio = () => {
  const portfolioItemStyle =
    "bg-color-bg-variant p-[1.3rem] rounded-[2rem] border border-transparent transition-all hover:border-color-primary-variant hover:bg-transparent";

  const itemImageStyle = "rounded-3xl overflow-hidden";

  const titleH3Style = "mt-[1.2rem] my-[2rem]";

  const itemCtaStyle = "flex gap-4 mb-4";

  const data = [
    {
      id: 1,
      image: "src/assets/portfolio1.png",
      title: "Test Title",
      github: "https://github.com",
      demo: "https://loom.com",
    },
    {
      id: 2,
      image: "src/assets/portfolio2.png",
      title: "Test Title",
      github: "https://github.com",
      demo: "https://loom.com",
    },
    {
      id: 3,
      image: "src/assets/portfolio3.png",
      title: "Test Title",
      github: "https://github.com",
      demo: "https://loom.com",
    },
    {
      id: 4,
      image: "src/assets/portfolio4.png",
      title: "Test Title",
      github: "https://github.com",
      demo: "https://loom.com",
    },
    {
      id: 5,
      image: "src/assets/portfolio5.png",
      title: "Test Title",
      github: "https://github.com",
      demo: "https://loom.com",
    },
    {
      id: 6,
      image: "src/assets/portfolio6.png",
      title: "Test Title",
      github: "https://github.com",
      demo: "https://loom.com",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container grid grid-cols-3 gap-12 md:grid-cols-2 md:gap-5 sm:grid-cols-1 sm:gap-4">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className={portfolioItemStyle}>
              <div className={itemImageStyle}>
                <img src={image} alt="Portfolio 1" />
              </div>
              <h3 className={titleH3Style}>{title}</h3>
              <div className={itemCtaStyle}>
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
