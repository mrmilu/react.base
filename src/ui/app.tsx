import { GlobalStyles } from "@/src/ui/styles/globals";
import { Modal } from "@/src/ui/components/modal/modal";
import { MainLoader } from "@/src/ui/components/main_loader/main_loader";
import { useRoutes } from "react-router-dom";
import { routes } from "@/src/ui/router/routes";

function App() {
  let page = useRoutes(routes);

  return (
    <>
      <GlobalStyles />
      <Modal />
      <MainLoader />
      {page}
    </>
  );
}

export default App;
