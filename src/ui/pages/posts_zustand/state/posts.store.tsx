import { createStore, useStore } from "zustand";
import type { PostsState } from "@/src/ui/pages/posts_zustand/view_models/posts.state";
import { locator } from "@/src/core/app/ioc";
import type { IocProvider } from "@/src/core/app/ioc/interfaces";
import type { GetDummyPostsUseCase } from "@/src/core/dummy/domain/use_cases/get_dummy_posts_use_case";
import { TYPES } from "@/src/core/app/ioc/types";
import type { PropsWithChildren } from "react";
import { createContext, useContext } from "react";
import { timeout } from "@front_web_mrmilu/utils";

const postsStore = createStore<PostsState>((set) => ({
  posts: [],
  isLoading: true,
  hasError: false,

  async loadPosts() {
    set({ isLoading: true, hasError: false });
    try {
      await timeout(2000);
      const getDummyPostsUseCase = await locator.get<IocProvider<GetDummyPostsUseCase>>(TYPES.GetDummyPostsUseCase)();
      set({ posts: await getDummyPostsUseCase.execute() });
    } catch (e) {
      console.error(e);
      set({ hasError: true });
    }
    set({ isLoading: false });
  }
}));

type StoreType = typeof postsStore;

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const PostsContext = createContext<StoreType>();

export const PostsProvider = ({ children }: PropsWithChildren) => <PostsContext.Provider value={postsStore}>{children}</PostsContext.Provider>;

export function usePostsStore<U>(selector: (state: PostsState) => U, equalityFn?: ((a: U, b: U) => boolean) | undefined) {
  const store = useContext(PostsContext);
  return useStore<StoreType, U>(store, selector, equalityFn);
}
