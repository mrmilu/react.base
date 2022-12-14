import type { PostsState } from "@/src/ui/pages/posts_zustand/view_models/posts.state";
import { locator } from "@/src/core/app/ioc";
import type { IocProvider } from "@/src/core/app/ioc/interfaces";
import type { GetDummyPostsUseCase } from "@/src/core/dummy/domain/use_cases/get_dummy_posts_use_case";
import { TYPES } from "@/src/core/app/ioc/types";
import { timeout } from "@front_web_mrmilu/utils";
import { zustandWithProvider } from "@/src/common/utils/zustand";

export const usePostsStore = zustandWithProvider<PostsState>((set) => ({
  posts: [],
  isLoading: true,
  hasError: false,

  async loadPosts() {
    set({ isLoading: true, hasError: false });
    try {
      await timeout(1000);
      const getDummyPostsUseCase = await locator.get<IocProvider<GetDummyPostsUseCase>>(TYPES.GetDummyPostsUseCase)();
      set({ posts: await getDummyPostsUseCase.execute() });
    } catch (e) {
      console.error(e);
      set({ hasError: true });
    }
    set({ isLoading: false });
  }
}));
