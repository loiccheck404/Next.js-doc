import Link from "next/link";

export default function Page() {
  return (
    <>
      <h1>Lalakipo Dashboard Page</h1>
      <p>Lalakipo Dashboard is mad</p>
      <Link href="/blog">Blog</Link>
      <br />
      <Link href="/">Home</Link>
    </>
  );
}
