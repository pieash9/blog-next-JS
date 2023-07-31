import Link from "next/link";
import React from "react";

const AboutNotFound = () => {
  return (
    <div className="flex flex-col gap-5 justify-center items-center mt-48">
      <h1 className="text-2xl font-medium ">About this page is not found.</h1>
      <Link href={"/about"}>
        <button className="btn-primary btn">Back to home</button>
      </Link>
    </div>
  );
};

export default AboutNotFound;
