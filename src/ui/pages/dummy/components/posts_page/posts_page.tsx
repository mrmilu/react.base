import Styled from "@/src/ui/pages/dummy/components/dummy_page/dummy_page.styled";
import { getPosts, getPostsThunk } from "@/src/ui/pages/dummy/state/dummy.slice";
import { useAppDispatch, useAppSelector } from "@/src/ui/state";
import { useBreakpointsMatch, useEffectStrictMode } from "@front_web_mrmilu/hooks";

export default function PostsPage() {
  const dispatch = useAppDispatch();
  const posts = useAppSelector(getPosts);
  const { mdAndUp } = useBreakpointsMatch();

  useEffectStrictMode(() => {
    dispatch(getPostsThunk());

    return () => {
      console.log("clean up"); // clean up only works if strict mode enabled
    };
  });

  return (
    <Styled.Wrapper data-cy="posts-page">
      {mdAndUp && <h2>Posts page</h2>}
      {posts.map((post, idx) => (
        <Styled.SimpleCard data-cy="dummy-card" key={`${post.id}_${idx}`} title={post.title} subtitle={post.body} />
      ))}
    </Styled.Wrapper>
  );
}
