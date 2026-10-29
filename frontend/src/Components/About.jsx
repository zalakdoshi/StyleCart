import React from "react";
import Heading from "./Heading";
import Card from "./Card";
const About = () => {
  return (
    <>
      <Heading head="About Page" subhead="About Sub-Head" />
      <Heading
        subhead=<h5 className="abDesc">
          I am a front-end developer with a particular interest in making things
          simple and usable. I try to keep up with best practices and am always
          looking for new things to learn.
        </h5>
      />
    </>
  );
};

export default About;
