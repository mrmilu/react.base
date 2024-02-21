import { Button } from "@/src/ui/components/button/button";
import { useUserProvider } from "@/src/ui/providers/user.provider";
import { Link, Outlet } from "react-router-dom";
import { SuspenseMainLoader } from "../../../components/suspense_main_loader/suspense_main_loader";
import css from "./root_page.css";
import { Modal } from "@/src/ui/containers/modal/modal";
import { MainLoader } from "@/src/ui/components/main_loader/main_loader";
import { theme } from "@/src/ui/styles/theme.css";
import "@/src/ui/styles/fonts.css";
import "@/src/ui/styles/globals.css";
import "@/src/ui/styles/reset.css";

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
