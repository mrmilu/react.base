import { defer } from "react-router-dom";
import { locator } from "@/src/core/app/ioc";
import type { IocProvider } from "@/src/core/app/ioc/interfaces";
import type { GetDummyPostsUseCase } from "@/src/core/dummy/domain/use_cases/get_dummy_posts_use_case";
import { TYPES } from "@/src/core/app/ioc/types";

export function postsPageLoader() {
  return defer({
    posts: (async () => {
      const getDummyPostsUseCase = await locator.get<IocProvider<GetDummyPostsUseCase>>(TYPES.GetDummyPostsUseCase)();
      return await getDummyPostsUseCase.execute();
    })()
  });
}
