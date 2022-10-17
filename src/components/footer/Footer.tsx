import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter, AiOutlineLinkedin } from "react-icons/ai";

const Footer = () => {
  const permalinksStyle = "text-color-bg";

  const footerSocialLinkStyle =
    "bg-color-bg text-color-white p-3 rounded-[0.7rem] flex border border-transparent hover:bg-transparent hover:text-color-bg hover:border-color-bg";

  return (
    <footer className="bg-color-primary py-12 text-center text-[0.9rem] pb-28">
      <a
        href="#"
        className="footer__logo text-color-bg text-3xl font-medium mb-8 inline-block"
      >
        Ridwan
      </a>

      <ul className="permalinks flex flex-wrap justify-center gap-8 mx-auto mb-12 sm:flex-col sm:gap-6">
        <li>
          <a className={permalinksStyle} href="#">
            Home
          </a>
        </li>
        <li>
          <a className={permalinksStyle} href="#about">
            About
          </a>
        </li>
        <li>
          <a className={permalinksStyle} href="#">
            Experiencce
          </a>
        </li>
        <li>
          <a className={permalinksStyle} href="#">
            Services
          </a>
        </li>
        <li>
          <a className={permalinksStyle} href="#">
            Portfolio
          </a>
        </li>
        <li>
          <a className={permalinksStyle} href="#">
            Testimonials
          </a>
        </li>
        <li>
          <a className={permalinksStyle} href="#">
            Contact
          </a>
        </li>
      </ul>

      <div className="footer__socials flex justify-center gap-4 mb-16 sm:mb-10">
        <a className={footerSocialLinkStyle} href="https://facebook.com">
          <FaFacebookF />
        </a>
        <a className={footerSocialLinkStyle} href="https://linkedin.com">
          <AiOutlineLinkedin />
        </a>
        <a className={footerSocialLinkStyle} href="https://twitter.com">
          <AiOutlineTwitter />
        </a>
      </div>

      <div className="footer__copyright">
        <small>
          &copy; All icons used on this site are not mine. Thye belong to their
          respective owners
        </small>
      </div>
    </footer>
  );
};

export default Footer;
