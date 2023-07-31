"use client";

import Link from "next/link";
import React from "react";
import "./login.css";
import { usePathname } from "next/navigation";
const LoginLayout = ({ children }) => {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <div>
      {pathName != "/login/login-teacher" ? (
        <ul className="login-menu">
          <li>
            <h3>Login Navbar</h3>
          </li>
          <li>
            <Link href="/login">Home</Link>
          </li>
          <li>
            <Link href="/login/login-teacher">Teacher login</Link>
          </li>
          <li>
            <Link href="/login/login-student">Student login</Link>
          </li>
        </ul>
      ):<Link href="/login" className="link">Go to main login</Link>}
      <h1>Common layout for login screen</h1>
      {children}
    </div>
  );
};

export default LoginLayout;
