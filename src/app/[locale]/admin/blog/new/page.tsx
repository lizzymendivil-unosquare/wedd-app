import CreatePost from "@/components/admin/blog/create-post";

export default function NewPostPage({ params }: { params: any }) {
  return <CreatePost id={params.id} />;
}
