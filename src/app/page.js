"use client";

import Link from "next/link";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const navigate = (name) => {
    router.push(name);
  };
  return (
    <main className={styles.main}>
      <h1 className="mb-10">Basic Routing | Make New Page </h1>
      <button className="btn btn-primary" onClick={() => navigate("/login")}>Go to login page</button>
      <button className="btn btn-secondary" onClick={() => navigate("/about")}>Go to About page</button>
      <br /> <br />
      <button className="btn btn-info" onClick={() => navigate("/login/login-student")}>
        Student login
      </button>
      <button className="btn btn-accent" onClick={() => navigate("/login/login-teacher")}>
        Teacher login
      </button>
    </main>
  );
}
