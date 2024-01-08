import { MainLoader } from "@/src/ui/components/main_loader/main_loader";
import { Modal } from "@/src/ui/containers/modal/modal";
import { routes } from "@/src/ui/router/routes";
import "@/src/ui/styles/fonts.css";
import "@/src/ui/styles/globals.css";
import "@/src/ui/styles/reset.css";
import { theme } from "@/src/ui/styles/theme.css";
import { useRoutes } from "react-router-dom";

function App() {
  const page = useRoutes(routes);

  return (
    <div className={theme}>
      <Modal />
      <MainLoader />
      {page}
    </div>
  );
}

export default App;
