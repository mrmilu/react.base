import { Modal } from "@/src/ui/containers/modal/modal";
import { MainLoader } from "@/src/ui/containers/main_loader/main_loader";
import { useRoutes } from "react-router-dom";
import { routes } from "@/src/ui/router/routes";
import React from "react";
import "@/src/ui/styles/globals.css";
import "@/src/ui/styles/fonts.css";
import "@/src/ui/styles/reset.css";

function App() {
  const page = useRoutes(routes);

  return (
    <>
      <Modal />
      <MainLoader />
      {page}
    </>
  );
}

export default App;
