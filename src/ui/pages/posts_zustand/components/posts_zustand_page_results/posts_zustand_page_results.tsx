import Styled from "@/src/ui/pages/dummy/components/dummy_page/dummy_page.styled";
import { usePostsController } from "@/src/ui/pages/posts_zustand/controllers/posts.controller";

export default function PostsZustandPageResults() {
  const { hasError, isLoading, posts, loadPosts } = usePostsController();

  if (posts.length)
    return (
      <>
        {posts.map((post, idx) => (
          <Styled.SimpleCard data-cy="dummy-card" key={`${post.id}_${idx}`} title={post.title} subtitle={post.body} />
        ))}
      </>
    );

  if (hasError)
    return (
      <p>
        Error loading posts. <button onClick={loadPosts}>Retry</button>
      </p>
    );

  if (isLoading) return <p>Loading posts…</p>;
  return <p>There are no posts</p>;
}
