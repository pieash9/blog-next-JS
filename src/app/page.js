"use client";

import { useState } from "react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import { Roboto } from "next/font/google";
import Image from "next/image";

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
        <Image src="/eye.jpeg" alt="eye" width={400} height={400}/>

        <h1 className={robot.className}>eta roboto font</h1>
      </div>
    </main>
  );
}
