// "use client";

import { apiBaseUrl } from "@/config/constant";
import styles from "./page.module.css";
import { Roboto } from "next/font/google";
import Link from "next/link";

const roboto = Roboto({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  console.log(process.env.SERVER_PASS);
  return (
    <main className={styles.main}>
      <div className="">
        {process.env.NODE_ENV == "development"
          ? "Development Mode"
          : "Production Mode"}
        <h1 className={roboto}>Pieash ahemd khan</h1>
        <Link href="/users" className="hover:text-red-500">
          Users
        </Link>
      </div>
      {apiBaseUrl}
    </main>
  );
}
