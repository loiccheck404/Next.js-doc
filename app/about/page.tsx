import Link from "next/link";
export default function Page() {
  return (
    <>
      <h1>About Lalakipo</h1>
      <p>
        If your exboyfriend no fit lalakipo put the bill on me <i>Lalakipo</i>
        <br />
        <Link href="/dashboard">Dashboard</Link>
        <br />
        <Link href="/blog">Blog</Link>
        <br />
        <Link href="/">Home</Link>
      </p>
    </>
  );
}
