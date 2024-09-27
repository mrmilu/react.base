import type { GetPostsUseCase } from "@/src/posts/application/use-cases/get-posts-use-case";
import { locator } from "@/src/shared/ioc/__generated__";
import { TYPES } from "@/src/shared/ioc/__generated__/types";
import type { IocProvider } from "@/src/shared/ioc/interfaces";
import { createProvider } from "@/src/shared/presentation/utils/zustand";
import { useEffectStrictMode } from "@front_web_mrmilu/hooks";
import { timeout, wrapPromise, wrapPromisePending } from "@front_web_mrmilu/utils";
import { PostsState } from "../view-models/posts-state";

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
