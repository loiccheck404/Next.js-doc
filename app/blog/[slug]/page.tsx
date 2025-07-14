export default function Page() {
  return (
    <>
      <h1>Lalakipo Blog Post Page</h1>
      <p>Lalakipo blogging is fun</p>
    </>
  );
}

/*export async function generateStaticParams() {
  const posts = await fetch('https://.../posts').then((res) => res.json())
 
  return posts.map((post) => ({
    slug: post.slug,
  }))
}
 
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  // ...
}*/
