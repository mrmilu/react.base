import { locator } from "@/src/core/app/ioc";
import type { IocProvider } from "@/src/core/app/ioc/interfaces";
import { TYPES } from "@/src/core/app/ioc/types";
import { timeout, wrapPromise } from "@front_web_mrmilu/utils";
import { createProvider } from "@/src/common/utils/zustand";
import { useEffectStrictMode } from "@front_web_mrmilu/hooks";
import type { PostsState } from "@/src/ui/features/posts/views/posts_list_page/view_models/posts_state";
import type { GetPostsUseCase } from "@/src/core/posts/domain/use_cases/get_posts_use_case";
import { wrapPromisePending } from "@front_web_mrmilu/utils";

export const usePostsProvider = createProvider<PostsState>(() => (set) => ({
  posts: wrapPromisePending(),
  isLoading: true,
  hasError: false,

  async loadPosts() {
    set({ isLoading: true, hasError: false });
    try {
      await timeout(1000);
      const getDummyPostsUseCase = await locator.get<IocProvider<GetPostsUseCase>>(TYPES.GetPostsUseCase)();
      const promise = getDummyPostsUseCase.execute();
      const posts = await wrapPromise(promise);
      set((state) => {
        state.posts = posts;
      });
    } catch (e) {
      console.error(e);
      set({ hasError: true });
    }
    set({ isLoading: false });
  }
}));

export const useInitPostsProvider = () => {
  const loadPosts = usePostsProvider((state) => state.loadPosts);

  useEffectStrictMode(() => {
    loadPosts();
  });
};
