import CreatePost from "@/components/admin/blog/create-post";

export default function NewPostPage({ params }) {
  return <CreatePost id={params.id} />;
}
