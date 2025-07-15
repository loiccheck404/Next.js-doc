import Link from "next/link";
import styles from "./blog.module.css";

export default function Page() {
  return (
    <>
      <h1>Lalakipo blog</h1>
      <p>This is a blog</p>
      <Link href="/dashboard">Dashboard</Link>
      <br />
      <Link href="/">Home</Link>
      <br />
      <main className={styles.blog}></main>
    </>
  );
}
