import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col gap-5 justify-center items-center mt-48">
      <h1 className="text-2xl font-medium ">This page is not available.</h1>
      <Link href={"/"}>
        <button className="btn-primary btn">Back to home</button>
      </Link>
    </div>
  );
};

export default NotFound;
