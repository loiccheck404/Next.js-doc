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

//You also can call the notFound function within a route segment and use the not-found.js file to show a 404 UI.
///**export async function generateMetadata({
/**import { getPostBySlug } from '@/lib/posts'
 
export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
 
  if (!post) {
    notFound()
  }
 
  return <div>{post.title}</div>
} */
