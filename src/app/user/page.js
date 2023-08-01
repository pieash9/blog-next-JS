"use client";

import React, { useState } from "react";

const User = () => {
  const [style, setStyle] = useState({ backgroundColor: "green" });
  return (
    <div>
      <h1>User page</h1>
      <h2>Head to the main page</h2>
      <h3 style={style}>That will change color by button</h3>
      <button className="btn btn-primary" onClick={() => setStyle({ backgroundColor: "red" })}>
        Change color
      </button>
    </div>
  );
};

export default User;
