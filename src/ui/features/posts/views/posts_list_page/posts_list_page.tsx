import BasePage from "@/src/ui/components/base_page/base_page";
import { PostsResults } from "@/src/ui/features/posts/views/posts_list_page/containers/post_results";
import { useInitPostsProvider } from "@/src/ui/features/posts/views/posts_list_page/providers/posts.provider";

export default function PostsListPage() {
  useInitPostsProvider();

  return (
    <BasePage data-cy="posts-page">
      <h2>Posts page</h2>
      <PostsResults />
    </BasePage>
  );
}
