import Link from "next/link";
import Nav from "./components/nav";
import Form from "./components/form";
import Modal from "./ui/modal";
//import Cart from './ui/cart'
import { Table } from "./table";
import { Suspense } from "react";
//import { BaseButton } from './base-button'
import styles from "./page.module.css";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <h1>Lalakipo</h1>
      <p>Welcome to the Lalakipo app!</p>
      <Link href="/dashboard">Dashboard</Link>
      <br />
      <Link href="/blog">Blog</Link>
      <br />
      <Nav />
      <Form />
      <Modal>
        <h2>Modal Title</h2>
        <p>This is a modal content.</p>
        <Link href="/">Close</Link>
      </Modal>
      <p>Robboto roboto ehh</p>
    </>
    //<BaseButton className={styles.primary} />
  );
}

// This is a simple page component that renders a welcome message, links to other pages, a navigation component, a form, and a modal.
//export default async function Page() {
// const data = await fetch('https://...', { cache: 'force-cache' })
//}

/** export default async function Page() {
  const res = await fetch(`https://...`)
  const data = await res.json()
 
  if (!res.ok) {
    return 'There was an error.'
  }
 
  return '...'
}f*/
