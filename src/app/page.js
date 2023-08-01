"use client";
import custom from "./custom.module.css";
import other from "./other.module.css";
import outside from "@/app/style/outside.module.css"

import styles from "./page.module.css";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const navigate = (name) => {
    router.push(name);
  };
  return (
    <main className={styles.main}>
      <h1 className={custom.main}>style and Css with NExt js</h1>
      <h1 className={other.main}>This is from other</h1>
      <h1 className={outside.main}>This is from other</h1>
    </main>
  );
}
