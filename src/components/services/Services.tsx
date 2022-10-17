import React from "react";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  const h3Style = "text-color-bg text-base text-center";

  const serviceStyle =
    "bg-color-bg-variant rounded-b-[2rem] border h-fit transition-all hover:bg-transparent hover:border-color-primary md:h-auto";

  const servicesHeadStyle =
    "services__head bg-color-primary p-8 rounded-b-[2rem] shadow-2xl";

  const liStyle = "flex gap-4 mb-3";

  const listIconStyle = "text-color-primary mt-[2px]";

  const pStyle = "text-[0.9rem]";

  return (
    <section id="services">
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container services__container grid grid-cols-2 gap-12 md:gap-8 sm:grid-cols-1 sm:gap-6">
        <article className={serviceStyle}>
          <div className={servicesHeadStyle}>
            <h3 className={h3Style}>Frontend</h3>
          </div>

          <ul className="services__list p-8">
            <li className={liStyle}>
              <BiCheck className={listIconStyle} />
              <p className={pStyle}>
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet.
              </p>
            </li>
            <li className={liStyle}>
              <BiCheck className={listIconStyle} />
              <p className={pStyle}>
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet.
              </p>
            </li>
            <li className={liStyle}>
              <BiCheck className={listIconStyle} />
              <p className={pStyle}>
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet.
              </p>
            </li>
            <li className={liStyle}>
              <BiCheck className={listIconStyle} />
              <p className={pStyle}>
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet.
              </p>
            </li>
          </ul>
        </article>
        {/* END OF FRONTEND SERVICES */}
        <article className={serviceStyle}>
          <div className={servicesHeadStyle}>
            <h3 className={h3Style}>Backend</h3>
          </div>

          <ul className="services__list p-8">
            <li className={liStyle}>
              <BiCheck className={listIconStyle} />
              <p className={pStyle}>
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet.
              </p>
            </li>
            <li className={liStyle}>
              <BiCheck className={listIconStyle} />
              <p className={pStyle}>
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet.
              </p>
            </li>
            <li className={liStyle}>
              <BiCheck className={listIconStyle} />
              <p className={pStyle}>
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet.
              </p>
            </li>
            <li className={liStyle}>
              <BiCheck className={listIconStyle} />
              <p className={pStyle}>
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet.
              </p>
            </li>
          </ul>
        </article>
        {/* END OF BACKEND SERVICES */}
      </div>
    </section>
  );
};

export default Services;
