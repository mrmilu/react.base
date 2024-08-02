import { AppErrorBoundary } from "@/src/ui/components/app-error-boundary/app-error-boundary";
import Page404 from "@/src/ui/components/error-pages/404";
import { SuspenseMainLoader } from "@/src/ui/components/suspense-main-loader/suspense-main-loader";
import { RootPage } from "@/src/ui/features/misc/root/root-page";
import { usePostsProvider } from "@/src/ui/features/posts/views/posts-list-page/providers/posts.provider";
import { useUsersListProvider } from "@/src/ui/features/users/views/users-list-page/providers/users-list.provider";
import { useAuthMiddleware } from "@/src/ui/router/middlewares/auth-middleware.hook";
import { RouteMiddleware } from "@/src/ui/router/route-middleware";
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const HomePage = lazy(() => import("@/src/ui/features/home/views/home-page/home-page"));
const UsersListPage = lazy(() => import("@/src/ui/features/users/views/users-list-page/users-list-page"));
const PostsListPage = lazy(() => import("@/src/ui/features/posts/views/posts-list-page/posts-list-page"));
const CreatePostPage = lazy(() => import("@/src/ui/features/posts/views/create-post-page/create-post-page"));

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
