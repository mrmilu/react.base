import Styled from "@/src/ui/pages/dummy/components/dummy_page/dummy_page.styled";
import PostsZustandPageResults from "@/src/ui/pages/posts_zustand/components/posts_zustand_page_results/posts_zustand_page_results";

export default function PostsZustandPage() {
  return (
    <Styled.Wrapper data-cy="posts-page">
      <h2>Posts page</h2>
      <PostsZustandPageResults />
    </Styled.Wrapper>
  );
}
