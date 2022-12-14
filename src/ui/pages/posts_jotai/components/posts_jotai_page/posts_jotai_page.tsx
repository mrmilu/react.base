import Styled from "@/src/ui/pages/dummy/components/dummy_page/dummy_page.styled";
import { PostsProvider } from "@/src/ui/pages/posts_jotai/state/posts.store";
import PostsJotaiPageResults from "@/src/ui/pages/posts_jotai/components/posts_jotai_page_results/posts_jotai_page_results";

export default function PostsJotaiPage() {
  return (
    <PostsProvider>
      <Styled.Wrapper data-cy="posts-page">
        <h2>Posts page</h2>
        <PostsJotaiPageResults />
      </Styled.Wrapper>
    </PostsProvider>
  );
}
