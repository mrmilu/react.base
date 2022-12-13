import Styled from "@/src/ui/components/base_layout/base_layout.styled";
import { Outlet, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getLoggedState, setLogged } from "@/src/ui/state/user.slice";
import { useAppDispatch } from "@/src/ui/state";
import { Button } from "@/src/ui/components/button/button";

export const BaseLayout = () => {
  const dispatch = useAppDispatch();
  const userLogged = useSelector(getLoggedState);

  const logUser = () => {
    dispatch(setLogged(!userLogged));
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
          <li>
            <Link to="/posts-react-router">list post (react router)</Link>
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
