import { Button } from "@/src/shared/presentation/components/button/button";
import { MainLoader } from "@/src/shared/presentation/components/main-loader/main-loader";
import { Modal } from "@/src/shared/presentation/containers/modal/modal";
import { useUserProvider } from "@/src/shared/presentation/providers/user.provider";
import "@/src/shared/presentation/styles/fonts.css";
import "@/src/shared/presentation/styles/globals.css";
import "@/src/shared/presentation/styles/reset.css";
import { theme } from "@/src/shared/presentation/styles/theme.css";
import { Link, Outlet } from "react-router-dom";
import { SuspenseMainLoader } from "../components/suspense-main-loader/suspense-main-loader";
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
