import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div>
      About
      <Link href={"/"}>GO to home</Link> <br />
      <Link className="link link-primary" href={"/about/about-student"}>GO to About Student</Link> <br />
      <Link className="link link-secondary" href={"/about/about-college"}>GO to About College</Link>
    </div>
  );
};

export default About;
