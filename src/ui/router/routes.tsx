import type { RouteObject } from "react-router-dom";
import { BaseLayout } from "@/src/ui/components/base_layout/base_layout";
import { AppErrorBoundary } from "@/src/ui/components/app_error_boundary/app_error_boundary";
import Page404 from "@/src/ui/components/error_pages/404";
import { lazy } from "react";
import { SuspenseMainLoader } from "@/src/ui/components/suspense_main_loader/suspense_main_loader";
import { RouteMiddleware } from "@/src/ui/router/route_middleware";
import { useAuthMiddleware } from "@/src/ui/router/middlewares/auth_middleware.hook";

const HomePage = lazy(() => import("@/src/ui/pages/home/components/home_page/home_page"));
const DummyPage = lazy(() => import("@/src/ui/pages/dummy/components/dummy_page/dummy_page"));
const PostsPage = lazy(() => import("@/src/ui/pages/dummy/components/posts_page/posts_page"));
const PostsZustandPage = lazy(() => import("@/src/ui/pages/posts_zustand/components/posts_zustand_page/posts_zustand_page"));
const CreatePostPage = lazy(() => import("@/src/ui/pages/dummy/components/create_post_page/create_post_page"));

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
              <DummyPage />
            </SuspenseMainLoader>
          </RouteMiddleware>
        )
      },
      {
        path: "/posts",
        element: (
          <SuspenseMainLoader>
            <PostsPage />
          </SuspenseMainLoader>
        )
      },
      {
        path: "/posts-zustand",
        element: (
          <SuspenseMainLoader>
            <PostsZustandPage />
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
