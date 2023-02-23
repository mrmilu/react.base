import type { RouteObject } from "react-router-dom";
import { BaseLayout } from "@/src/ui/components/base_layout/base_layout";
import { AppErrorBoundary } from "@/src/ui/components/app_error_boundary/app_error_boundary";
import Page404 from "@/src/ui/components/error_pages/404";
import { lazy } from "react";
import { SuspenseMainLoader } from "@/src/ui/components/suspense_main_loader/suspense_main_loader";
import { RouteMiddleware } from "@/src/ui/router/route_middleware";
import { useAuthMiddleware } from "@/src/ui/router/middlewares/auth_middleware.hook";
import { useUsersListProvider } from "@/src/ui/pages/users/views/users_list_view/providers/users_list.provider";
import { usePostsProvider } from "@/src/ui/pages/posts/views/posts_list_view/providers/posts.provider";

const HomeView = lazy(() => import("@/src/ui/pages/home/views/home_view/home_view"));
const UsersListView = lazy(() => import("@/src/ui/pages/users/views/users_list_view/users_list_view"));
const PostsListView = lazy(() => import("@/src/ui/pages/posts/views/posts_list_view/posts_list_view"));
const CreatePostView = lazy(() => import("@/src/ui/pages/posts/views/create_post_view/create_post_view"));

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
              <HomeView />
            </SuspenseMainLoader>
          </AppErrorBoundary>
        )
      },
      {
        path: "/users",
        element: (
          <AppErrorBoundary key="users">
            <RouteMiddleware validationHook={useAuthMiddleware}>
              <useUsersListProvider.State>
                <UsersListView />
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
              <PostsListView />
            </usePostsProvider.State>
          </AppErrorBoundary>
        )
      },
      {
        path: "/create-post",
        element: (
          <AppErrorBoundary key="create-post">
            <CreatePostView />
          </AppErrorBoundary>
        )
      },
      { path: "*", element: <Page404 /> }
    ]
  }
];
