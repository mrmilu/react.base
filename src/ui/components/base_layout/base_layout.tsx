import { BaseLayoutFooterStyled, BaseLayoutNavStyled, BaseLayoutStyled } from "@/src/ui/components/base_layout/base_layout.styled";
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
        <Button data-cy="login-btn" onClick={logUser}>
          {userLogged ? "Log out" : "Log in"}
        </Button>
      </BaseLayoutNavStyled>
      <main>
        <Outlet />
      </main>
      <BaseLayoutFooterStyled>cool footer</BaseLayoutFooterStyled>
    </BaseLayoutStyled>
  );
};
