import { SimpleCard } from "@/src/shared/presentation/components/simple-card/simple-card";
import { Suspense } from "react";
import { usePostsProvider } from "../providers/posts.provider";

export function PostsResults() {
  const hasError = usePostsProvider((state) => state.hasError);
  const loadPosts = usePostsProvider((state) => state.loadPosts);

  if (hasError)
    return (
      <p>
        Error loading posts. <button onClick={loadPosts}>Retry</button>
      </p>
    );
  return (
    <Suspense fallback={<p>Loading posts…</p>}>
      <PostsList />
    </Suspense>
  );
}

function PostsList() {
  const posts = usePostsProvider((state) => state.posts)?.read();

  if (posts?.length)
    return <>{posts?.map((post, idx) => <SimpleCard data-cy="post-card" key={`${post.id}_${idx}`} title={post.title} subtitle={post.body} />)}</>;

  if (posts?.length == 0) return <p>There are no posts</p>;

  return <></>;
}
