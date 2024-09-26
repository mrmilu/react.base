import BasePage from "@/src/shared/ui/components/base-page/base-page";
import { PostsResults } from "./containers/post-results";
import { useInitPostsProvider } from "./providers/posts.provider";

export default function PostsListPage() {
  useInitPostsProvider();

  return (
    <BasePage data-cy="posts-page">
      <h2>Posts page</h2>
      <PostsResults />
    </BasePage>
  );
}
