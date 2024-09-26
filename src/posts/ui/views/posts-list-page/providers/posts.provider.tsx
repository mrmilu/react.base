import { createProvider } from "@/src/common/utils/zustand";
import { locator } from "@/src/core/app/ioc/__generated__";
import { TYPES } from "@/src/core/app/ioc/__generated__/types";
import type { IocProvider } from "@/src/core/app/ioc/interfaces";
import type { GetPostsUseCase } from "@/src/core/posts/domain/use-cases/get-posts-use-case";
import type { PostsState } from "@/src/ui/features/posts/views/posts-list-page/view-models/posts-state";
import { useEffectStrictMode } from "@front_web_mrmilu/hooks";
import { timeout, wrapPromise, wrapPromisePending } from "@front_web_mrmilu/utils";

export const usePostsProvider = createProvider<PostsState>(() => (set) => ({
  posts: wrapPromisePending(),
  hasError: false,

  async loadPosts() {
    set({ hasError: false });
    try {
      await timeout(1000);
      const getPostsUseCase = await locator.get<IocProvider<GetPostsUseCase>>(TYPES.GetPostsUseCase)();
      const promise = getPostsUseCase.execute();
      const posts = await wrapPromise(promise);
      set((state) => {
        state.posts = posts;
      });
    } catch (e) {
      console.error(e);
      set({ hasError: true });
    }
  }
}));

export const useInitPostsProvider = () => {
  const loadPosts = usePostsProvider((state) => state.loadPosts);

  useEffectStrictMode(() => {
    loadPosts();
  });
};
