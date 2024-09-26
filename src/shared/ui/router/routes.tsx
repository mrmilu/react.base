import { usePostsProvider } from "@/src/posts/ui/views/posts-list-page/providers/posts.provider";
import { AppErrorBoundary } from "@/src/shared/ui/components/app-error-boundary/app-error-boundary";
import Page404 from "@/src/shared/ui/components/error-pages/404";
import { SuspenseMainLoader } from "@/src/shared/ui/components/suspense-main-loader/suspense-main-loader";
import { RootPage } from "@/src/shared/ui/root/root-page";
import { useAuthMiddleware } from "@/src/shared/ui/router/middlewares/auth-middleware.hook";
import { RouteMiddleware } from "@/src/shared/ui/router/route-middleware";
import { useUsersListProvider } from "@/src/users/ui/views/users-list-page/providers/users-list.provider";
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const HomePage = lazy(() => import("@/src/home/ui/views/home-page/home-page"));
const UsersListPage = lazy(() => import("@/src/users/ui/views/users-list-page/users-list-page"));
const PostsListPage = lazy(() => import("@/src/posts/ui/views/posts-list-page/posts-list-page"));
const CreatePostPage = lazy(() => import("@/src/posts/ui/views/create-post-page/create-post-page"));

// TODO migrate to new DataRouter API
export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
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
]);
