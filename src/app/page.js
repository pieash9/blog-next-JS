"use client";

import { useState } from "react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import { Roboto } from "next/font/google";

const robot = Roboto({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  const [color, setColor] = useState("red");
  const router = useRouter();
  const navigate = (name) => {
    router.push(name);
  };
  return (
    <main className={styles.main}>
      <div className="">
        <h1>Pieash ahemd khan</h1>
        
        <h3 className={robot.className}>eta roboto font</h3>
      </div>
    </main>
  );
}
