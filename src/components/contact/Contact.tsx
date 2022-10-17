import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      // .sendForm(
      //   "YOUR_SERVICE_ID",
      //   "YOUR_TEMPLATE_ID",
      //   form.current,
      //   "YOUR_PUBLIC_KEY"
      // )
      .sendForm(
        "service_2r7fidm",
        "template_12tduvs",
        form.current,
        "qKxOiFaxYI9a9ZQ-z"
      )
      .then(
        (result) => {
          console.log("berhasil");
          console.log(result.text);
        },
        (error) => {
          console.log("gagal");
          console.log(error.text);
        }
      );

    e.target.reset();
  };
  const optionStyle =
    "bg-color-bg-variant p-5 rounded-[1.2rem] text-center border border-transparent transition-all hover:bg-transparent hover:border-color-primary-variant";

  const optionIconStyle = "text-2xl mb-2";

  const linkStyle = "mt-[0.7rem] inline-block text-[0.8rem]";

  const formTextStyle =
    "w-full p-6 rounded-lg bg-transparent border-2 border-color-primary-variant resize-none text-color-white";

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container w-[58%] grid grid-cols-[30%_58%] gap-[12%] md:grid-cols-1 md:gap-8 sm:grid-cols-1 sm:gap-8  sm:w-container-width-sm">
        <div className="contact__options flex flex-col gap-5 ">
          <article className={optionStyle}>
            <MdOutlineEmail className={optionIconStyle} />
            <h4>Email</h4>
            <h5 className="text-color-light">ridwan.rais2@gmail.com</h5>
            <a
              href="mailto:ridwan.rais2@gmail.com"
              target="_blank"
              className={linkStyle}
            >
              Send a message
            </a>
          </article>
          <article className={optionStyle}>
            <RiMessengerLine className={optionIconStyle} />
            <h4>Mesengger</h4>
            <h5 className="text-color-light">Ridwan Rais Firdaus</h5>
            <a
              href="https://m.me/ridwanraisfirdaus"
              target="_blank"
              className={linkStyle}
            >
              Send a message
            </a>
          </article>
          <article className={optionStyle}>
            <BsWhatsapp className={optionIconStyle} />
            <h4>WhatsApp</h4>
            <h5 className="text-color-light">+6285745232122</h5>
            <a
              href="https://wa.me/6285336668899"
              target="_blank"
              className={linkStyle}
            >
              Send a message
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-5">
          <input
            className={formTextStyle}
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />
          <input
            className={formTextStyle}
            type="text"
            name="email"
            placeholder="Your Email"
            required
          />
          <textarea
            className={formTextStyle}
            name="message"
            rows={7}
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
