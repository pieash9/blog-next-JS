"use client";
import { useState } from "react";
import image1 from "../../public/image2.jpg";

import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Home() {
  const [color, setColor] = useState("red");
  const router = useRouter();
  const navigate = (name) => {
    router.push(name);
  };
  return (
    <main className={styles.main}>
      <div className="flex gap-5">
        <Image width={200} height={200} src={image1} alt="img1" />
        <Image
          src="https://images.pexels.com/photos/1172064/pexels-photo-1172064.jpeg?cs=srgb&dl=pexels-oleksandr-canary-islands-1172064.jpg&fm=jpg"
          width={300}
          height={200}
          alt="P"
        />
      </div>
    </main>
  );
}
