import Styled from "@/src/ui/pages/dummy/components/dummy_page/dummy_page.styled";
import PostsZustandPageResults from "@/src/ui/pages/posts_zustand/components/posts_zustand_page_results/posts_zustand_page_results";
import { usePostsStore } from "@/src/ui/pages/posts_zustand/state/posts.store";

export default function PostsZustandPage() {
  return (
    <usePostsStore.Provider>
      <Styled.Wrapper data-cy="posts-page">
        <h2>Posts page</h2>
        <PostsZustandPageResults />
      </Styled.Wrapper>
    </usePostsStore.Provider>
  );
}
