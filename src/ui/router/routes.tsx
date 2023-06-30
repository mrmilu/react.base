import type { RouteObject } from "react-router-dom";
import { BaseLayout } from "@/src/ui/components/base_layout/base_layout";
import { AppErrorBoundary } from "@/src/ui/components/app_error_boundary/app_error_boundary";
import Page404 from "@/src/ui/components/error_pages/404";
import { lazy } from "react";
import { SuspenseMainLoader } from "@/src/ui/components/suspense_main_loader/suspense_main_loader";
import { RouteMiddleware } from "@/src/ui/router/route_middleware";
import { useAuthMiddleware } from "@/src/ui/router/middlewares/auth_middleware.hook";
import { useUsersListProvider } from "@/src/ui/features/users/views/users_list_page/providers/users_list.provider";
import { usePostsProvider } from "@/src/ui/features/posts/views/posts_list_page/providers/posts.provider";

const HomePage = lazy(() => import("@/src/ui/features/home/views/home_page/home_page"));
const UsersListPage = lazy(() => import("@/src/ui/features/users/views/users_list_page/users_list_page"));
const PostsListPage = lazy(() => import("@/src/ui/features/posts/views/posts_list_page/posts_list_page"));
const CreatePostPage = lazy(() => import("@/src/ui/features/posts/views/create_post_page/create_post_page"));

// TODO migrate to new DataRouter API
export const routes: Array<RouteObject> = [
  {
    path: "/",
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: (
          <AppErrorBoundary key="home">
            <SuspenseMainLoader>
              <HomePage />
            </SuspenseMainLoader>
          </AppErrorBoundary>
        )
      },
      {
        path: "/users",
        element: (
          <AppErrorBoundary key="users">
            <RouteMiddleware key="auth-middleware" validationHook={useAuthMiddleware}>
              <useUsersListProvider.State>
                <UsersListPage />
              </useUsersListProvider.State>
            </RouteMiddleware>
          </AppErrorBoundary>
        )
      },
      {
        path: "/posts",
        element: (
          <AppErrorBoundary key="posts">
            <usePostsProvider.State>
              <PostsListPage />
            </usePostsProvider.State>
          </AppErrorBoundary>
        )
      },
      {
        path: "/create-post",
        element: (
          <AppErrorBoundary key="create-post">
            <CreatePostPage />
          </AppErrorBoundary>
        )
      },
      { path: "*", element: <Page404 /> }
    ]
  }
];
