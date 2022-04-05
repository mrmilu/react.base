import type { RouteObject } from "react-router-dom";
import { BaseLayout } from "@/src/ui/components/base_layout/base_layout";
import HomePage from "@/src/ui/pages/home/components/home_page/home_page";
import DummyPage from "@/src/ui/pages/dummy/components/dummy_page/dummy_page";
import Page404 from "@/src/ui/components/error_pages/404";
import PostsPage from "@/src/ui/pages/dummy/components/posts_page/posts_page";
import CreatePostPage from "@/src/ui/pages/dummy/components/create_post_page/create_post_page";

export const routes: Array<RouteObject> = [
  {
    path: "/",
    element: <BaseLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "/dummy",
        element: <DummyPage />
      },
      {
        path: "/posts",
        element: <PostsPage />
      },
      {
        path: "/create-post",
        element: <CreatePostPage />
      },
      { path: "*", element: <Page404 /> }
    ]
  }
];
