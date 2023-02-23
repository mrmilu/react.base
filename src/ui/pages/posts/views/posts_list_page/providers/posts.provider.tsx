import { locator } from "@/src/core/app/ioc";
import type { IocProvider } from "@/src/core/app/ioc/interfaces";
import { TYPES } from "@/src/core/app/ioc/types";
import { timeout } from "@front_web_mrmilu/utils";
import { createProvider } from "@/src/common/utils/zustand";
import { useEffectStrictMode } from "@front_web_mrmilu/hooks";
import type { PostsState } from "@/src/ui/pages/posts/views/posts_list_page/view_models/posts_state";
import type { GetPostsUseCase } from "@/src/core/posts/domain/use_cases/get_posts_use_case";

export const usePostsProvider = createProvider<PostsState>((set) => ({
  posts: [],
  isLoading: true,
  hasError: false,

  async loadPosts() {
    set({ isLoading: true, hasError: false });
    try {
      await timeout(1000);
      const getDummyPostsUseCase = await locator.get<IocProvider<GetPostsUseCase>>(TYPES.GetPostsUseCase)();
      set({ posts: await getDummyPostsUseCase.execute() });
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
