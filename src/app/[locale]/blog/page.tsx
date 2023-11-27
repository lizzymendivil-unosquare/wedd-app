import { getScopedI18n } from "@/locales/server";
import Title from "@/components/common/title";
import BlogPost from "@/components/blog/blog";
import { prisma } from "@/db";

function getPosts() {
  return prisma.post.findMany();
}

export default async function BlogPage() {
  const posts = await getPosts();
  const t = await getScopedI18n("blog");

  return (
    <>
      <Title>{t("title")}</Title>

      {posts.map((post) => (
        <BlogPost key={post.id} {...post} />
      ))}
    </>
  );
}
