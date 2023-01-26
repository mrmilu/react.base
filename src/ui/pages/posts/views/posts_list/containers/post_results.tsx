import { usePostsProvider } from "@/src/ui/pages/posts/views/posts_list/providers/posts.provider";
import { SimpleCard } from "@/src/ui/components/simple_card/simple_card";

export function PostsResults() {
  const hasError = usePostsProvider((state) => state.hasError);
  const isLoading = usePostsProvider((state) => state.isLoading);
  const posts = usePostsProvider((state) => state.posts);
  const loadPosts = usePostsProvider((state) => state.loadPosts);

  if (posts.length)
    return (
      <>
        {posts.map((post, idx) => (
          <SimpleCard data-cy="dummy-card" key={`${post.id}_${idx}`} title={post.title} subtitle={post.body} />
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
