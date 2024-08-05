import BasePage from "@/src/ui/components/base-page/base-page";
import { PostsResults } from "@/src/ui/features/posts/views/posts-list-page/containers/post-results";
import { useInitPostsProvider } from "@/src/ui/features/posts/views/posts-list-page/providers/posts.provider";

export default function PostsListPage() {
  useInitPostsProvider();

  return (
    <BasePage data-cy="posts-page">
      <h2>Posts page</h2>
      <PostsResults />
    </BasePage>
  );
}
