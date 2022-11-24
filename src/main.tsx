import React from "react";
import ReactDOM from "react-dom/client";
import Landing from "./pages/Landing";
import { MantineProvider } from "@mantine/core";
// import { GlobalTheme } from "./theme/GlobalTheme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Landing />
    </MantineProvider>
  </React.StrictMode>
);
