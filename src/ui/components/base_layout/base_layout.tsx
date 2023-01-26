import Styled from "@/src/ui/components/base_layout/base_layout.styled";
import { Outlet, Link } from "react-router-dom";
import { Button } from "@/src/ui/components/button/button";
import { useUserProvider } from "@/src/ui/providers/user.provider";

export const BaseLayout = () => {
  const userLogged = useUserProvider((state) => state.logged);
  const setLogged = useUserProvider((state) => state.setLogged);

  const logUser = () => {
    setLogged(!userLogged);
  };

  return (
    <Styled.Wrapper>
      <Styled.Nav>
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
        <Button data-cy="login-btn" onClick={logUser}>
          {userLogged ? "Log out" : "Log in"}
        </Button>
      </Styled.Nav>
      <main>
        <Outlet />
      </main>
      <Styled.Footer>cool footer</Styled.Footer>
    </Styled.Wrapper>
  );
};
