import { GlobalStyles } from "@/src/ui/styles/globals";
import { Modal } from "@/src/ui/components/modal/modal";
import { MainLoader } from "@/src/ui/components/main_loader/main_loader";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "@/src/ui/router/routes";

const router = createBrowserRouter(routes);
function App() {
  return (
    <>
      <GlobalStyles />
      <Modal />
      <MainLoader />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
