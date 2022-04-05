import type { PropsWithChildren } from "react";
import { BaseLayoutFooterStyled, BaseLayoutNavStyled, BaseLayoutStyled } from "@/src/ui/components/base_layout/base_layout.styled";
import { Outlet, Link } from "react-router-dom";

export const BaseLayout = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <BaseLayoutStyled>
      <BaseLayoutNavStyled>
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/dummy">dummy</Link>
          </li>
          <li>
            <Link to="/create-post">create post</Link>
          </li>
          <li>
            <Link to="/posts">list post</Link>
          </li>
        </ul>
      </BaseLayoutNavStyled>
      <main>
        <Outlet />
      </main>
      <BaseLayoutFooterStyled>cool footer</BaseLayoutFooterStyled>
    </BaseLayoutStyled>
  );
};
