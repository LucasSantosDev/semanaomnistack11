import React from "react";
import { isMobile } from "react-device-detect";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./styles/global.css";

import PageDownloadApp from "~/containers/pages/PageDownloadApp";
import Routes from "./routes";

function App() {
  return (
    <>
      <ToastContainer autoClose={8000} />
      {isMobile ? <PageDownloadApp /> : <Routes />}
    </>
  );
}

export default App;
