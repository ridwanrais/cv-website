import React from "react";

const CTA = () => {
  return (
    <div className="cta mt-10 flex gap-x-5 justify-center">
      <a href="src/assets/cv-rf.pdf" download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
