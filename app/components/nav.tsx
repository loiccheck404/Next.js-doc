"use client";

import { CustomLink as Link } from "./custom-link";

export default function Nav() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <br />
      <Link href="/about">About</Link>
    </nav>
  );
}
