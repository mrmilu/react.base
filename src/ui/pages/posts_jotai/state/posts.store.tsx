import type { PropsWithChildren } from "react";
import { atom, Provider, useAtomValue, useSetAtom } from "jotai";
import type { PostsState } from "@/src/ui/pages/posts_jotai/view_models/posts.state";
import { locator } from "@/src/core/app/ioc";
import type { IocProvider } from "@/src/core/app/ioc/interfaces";
import type { GetDummyPostsUseCase } from "@/src/core/dummy/domain/use_cases/get_dummy_posts_use_case";
import { TYPES } from "@/src/core/app/ioc/types";

const postsScope = "posts";

const postsAtom = atom<PostsState>({
  posts: [],
  isLoading: true,
  hasError: false
});

const loadPostsAtom = atom(null, async (get, set) => {
  set(postsAtom, (p) => ({ ...p, isLoading: true, hasError: false }));
  try {
    const getDummyPostsUseCase = await locator.get<IocProvider<GetDummyPostsUseCase>>(TYPES.GetDummyPostsUseCase)();
    const posts = await getDummyPostsUseCase.execute();
    set(postsAtom, (p) => ({ ...p, posts, isLoading: false }));
  } catch (e) {
    set(postsAtom, (p) => ({ ...p, hasError: true, isLoading: false }));
  }
});

export const usePostsStore = () => useAtomValue(postsAtom, postsScope);
export const useLoadPosts = () => useSetAtom(loadPostsAtom, postsScope);
export const PostsProvider = ({ children }: PropsWithChildren) => <Provider scope={postsScope}>{children}</Provider>;
