import { Button } from "@/src/ui/components/button/button";
import { MainLoader } from "@/src/ui/components/main-loader/main-loader";
import { Modal } from "@/src/ui/containers/modal/modal";
import { useUserProvider } from "@/src/ui/providers/user.provider";
import "@/src/ui/styles/fonts.css";
import "@/src/ui/styles/globals.css";
import "@/src/ui/styles/reset.css";
import { theme } from "@/src/ui/styles/theme.css";
import { Link, Outlet } from "react-router-dom";
import { SuspenseMainLoader } from "../../../components/suspense-main-loader/suspense-main-loader";
import css from "./root-page.css";

export const RootPage = () => {
  const userLogged = useUserProvider((state) => state.logged);
  const setLogged = useUserProvider((state) => state.setLogged);

  const logUser = () => {
    setLogged(!userLogged);
  };

  return (
    <div className={theme}>
      <Modal />
      <MainLoader />
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
    </div>
  );
};
