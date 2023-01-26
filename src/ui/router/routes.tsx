import type { RouteObject } from "react-router-dom";
import { BaseLayout } from "@/src/ui/components/base_layout/base_layout";
import { AppErrorBoundary } from "@/src/ui/components/app_error_boundary/app_error_boundary";
import Page404 from "@/src/ui/components/error_pages/404";
import { lazy } from "react";
import { SuspenseMainLoader } from "@/src/ui/components/suspense_main_loader/suspense_main_loader";
import { RouteMiddleware } from "@/src/ui/router/route_middleware";
import { useAuthMiddleware } from "@/src/ui/router/middlewares/auth_middleware.hook";
import { useUsersListProvider } from "@/src/ui/pages/users/views/users_list/providers/dummy.provider";
import { usePostsProvider } from "@/src/ui/pages/posts/views/posts_list/providers/posts.provider";

const HomePage = lazy(() => import("@/src/ui/pages/home/views/home_page/home_page"));
const DummyPage = lazy(() => import("@/src/ui/pages/users/views/users_list/users_list_page"));
const PostsPage = lazy(() => import("@/src/ui/pages/posts/views/posts_list/posts_page"));
const CreatePostPage = lazy(() => import("@/src/ui/pages/posts/views/create_post/create_post_page"));

export const routes: Array<RouteObject> = [
  {
    path: "/",
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: (
          <AppErrorBoundary>
            <SuspenseMainLoader>
              <HomePage />
            </SuspenseMainLoader>
          </AppErrorBoundary>
        )
      },
      {
        path: "/dummy",
        element: (
          <RouteMiddleware validationHook={useAuthMiddleware}>
            <SuspenseMainLoader>
              <useUsersListProvider.State>
                <DummyPage />
              </useUsersListProvider.State>
            </SuspenseMainLoader>
          </RouteMiddleware>
        )
      },
      {
        path: "/posts",
        element: (
          <SuspenseMainLoader>
            <usePostsProvider.State>
              <PostsPage />
            </usePostsProvider.State>
          </SuspenseMainLoader>
        )
      },
      {
        path: "/create-post",
        element: (
          <SuspenseMainLoader>
            <CreatePostPage />
          </SuspenseMainLoader>
        )
      },
      { path: "*", element: <Page404 /> }
    ]
  }
];
