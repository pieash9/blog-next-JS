"use client";

import { useRouter } from "next/navigation";

import Link from "next/link";
import React from "react";

const Login = () => {
  const router = useRouter();

  const navigate = (page) => {
    router.push("/login/" + page);
  };
  return (
    <div>
      <h1>Hello Login</h1>
      <Link href={"/"}>GO to home</Link>

      <br />
      <button onClick={() => navigate("login-student")}>
        GO to student login
      </button>
      <button onClick={() => navigate("login-teacher")}>
        GO to Teacher login
      </button>
    </div>
  );
};

export default Login;
