import Styled from "@/src/ui/pages/dummy/components/dummy_page/dummy_page.styled";
import { useBreakpointsMatch } from "@front_web_mrmilu/hooks";
import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import type { DummyPost } from "@/src/core/dummy/domain/models/dummy_post";

export default function PostsReactRouterPage() {
  const { mdAndUp } = useBreakpointsMatch();
  const { posts } = useLoaderData() as { posts: DummyPost[] };
  return (
    <Styled.Wrapper data-cy="posts-page">
      {mdAndUp && <h2>Posts page</h2>}

      <Suspense fallback="Loading posts…">
        <Await resolve={posts} errorElement="Error loading posts">
          {(posts: DummyPost[]) => (
            <>
              {posts.map((post, idx) => (
                <Styled.SimpleCard data-cy="dummy-card" key={`${post.id}_${idx}`} title={post.title} subtitle={post.body} />
              ))}
            </>
          )}
        </Await>
      </Suspense>
    </Styled.Wrapper>
  );
}
