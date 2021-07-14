import React from "react";
import { Link } from "react-router-dom";
import { planIcon } from "../utility/commonStaticData";
const MyContant = () => {
  return (
    <>
      <h3 className="heading_video">BISWAJIT MONDAL</h3>
      <p className="my_posi">
        <code>Software Developer</code>
      </p>
      <p className="my_posi_preag">
        I'm a
        <strong>
          <i> Software Developer </i>
        </strong>
        specialised in
        <strong>
          <i> Frontend Development </i>
        </strong>
        for complex scalable web site. Want to know how I may help your project?
        Check out my project portfolio and online resume.
      </p>
      <Link to="" className="resume">
        {planIcon} View Resume
      </Link>
    </>
  );
};

export default MyContant;
