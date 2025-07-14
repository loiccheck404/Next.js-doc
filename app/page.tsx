import Link from "next/link";
import Nav from "./components/nav";
import Form from "./components/form";
import Modal from "./ui/modal";
//import Cart from './ui/cart'
import { Table } from "./table";
import { Suspense } from "react";

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
    </>
  );
}
