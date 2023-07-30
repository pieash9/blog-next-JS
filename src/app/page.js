"use client";
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [name, setName] = useState("Pieash");
  const apple = () => {
    setName("Khan");
  };

  const InnerComp = () => {
    return <h1>Pieash</h1>;
  };
  return (
    <main className={styles.main}>
      <h1>Home Page {name}</h1>
      <button onClick={() => apple()}>Click me</button>
      <InnerComp />
    </main>
  );
}
