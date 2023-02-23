import BasePageStyled from "@/src/ui/pages/misc/components/base_page.styled";
import { useInitPostsProvider } from "@/src/ui/pages/posts/views/posts_list_page/providers/posts.provider";
import { PostsResults } from "@/src/ui/pages/posts/views/posts_list_page/containers/post_results";

export default function PostsListPage() {
  useInitPostsProvider();

  return (
    <BasePageStyled.Wrapper data-cy="posts-page">
      <h2>Posts page</h2>
      <PostsResults />
    </BasePageStyled.Wrapper>
  );
}
