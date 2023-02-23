import BasePageStyled from "@/src/ui/pages/misc/components/base_page.styled";
import { useInitPostsProvider } from "@/src/ui/pages/posts/views/posts_list_view/providers/posts.provider";
import { PostsResults } from "@/src/ui/pages/posts/views/posts_list_view/containers/post_results";

export default function PostsListView() {
  useInitPostsProvider();

  return (
    <BasePageStyled.Wrapper data-cy="posts-list-view">
      <h2>Posts page</h2>
      <PostsResults />
    </BasePageStyled.Wrapper>
  );
}
