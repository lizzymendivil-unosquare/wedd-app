import { prisma } from "@/db";
import Link from "next/link";

import PostCard from "@/components/admin/blog/post-card";

async function loadPosts() {
  return await prisma.post.findMany();
}
export default async function BlogPage() {
  const posts = await loadPosts();

  return (
    <>
      <div className="container mx-auto flex justify-between items-center text-white pt-3">
        <h1 className="white-text">Showing all posts...</h1>
        <Link
          className="bg-purple-700 text-white hover:bg-amber-400  rounded-md px-3 py-2 text-sm font-medium"
          href="/admin/blog/new"
        >
          Add Post
        </Link>
      </div>
      {/* <section className="container mx-auto">
        <div className="grid grid-cols-3 gap-3 mt-10"> */}
      <section className="bg-black mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-16 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {posts.map((post) => (
            <PostCard post={post} key={post.id} />
          ))}
        </div>
      </section>
    </>
  );
}
