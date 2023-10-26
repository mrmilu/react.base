import { Button } from "@/src/ui/components/button/button";
import { SuspenseMainLoader } from "@/src/ui/components/suspense_main_loader/suspense_main_loader";
import { useUserProvider } from "@/src/ui/providers/user.provider";
import { Link, Outlet } from "react-router-dom";
import css from "./base_layout.css";

export const BaseLayout = () => {
  const userLogged = useUserProvider((state) => state.logged);
  const setLogged = useUserProvider((state) => state.setLogged);

  const logUser = () => {
    setLogged(!userLogged);
  };

  return (
    <div className={css.wrapper}>
      <nav className={css.nav}>
        <ul className={css.ul}>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/users">users</Link>
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
      </nav>
      <main className={css.main}>
        <SuspenseMainLoader>
          <Outlet />
        </SuspenseMainLoader>
      </main>
      <footer className={css.footer}>cool footer</footer>
    </div>
  );
};
