import { postsApi } from "@/app/api";
import { Post } from "@/types";

const PostPage = async ({ params }: { params: { id: string } }) => {
  const id = String(params.id);
  let post: Post | null = null;
  let error: string | null = null;

  try {
    post = await postsApi.getPost(id);
  } catch (err) {
    error = 'Failed to fetch post';
  }

  if (error) return <div>{error}</div>;
  if (!post) return <div>Post not found.</div>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export default PostPage;
