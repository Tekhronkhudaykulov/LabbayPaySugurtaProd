import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "react-lazy-load-image-component/src/effects/opacity.css";
import { DataProvider } from "./context/ContextProvider";
import AOS from "aos";

AOS.init({
  duration: 1000, // Animatsiya davomiyligi
});
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <DataProvider>
      <App />
    </DataProvider>
  </React.StrictMode>
);

// Remove Preload scripts loading
postMessage({ payload: "removeLoading" }, "*");
