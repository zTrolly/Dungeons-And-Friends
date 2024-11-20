import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider, useTheme } from "./components/theme-provider";

const ThemedApp = React.memo(() => {
  const {theme} = useTheme(); // Supondo que useTheme é seu hook que lê do contexto
  return (
    <div className={theme}>
      <App />
    </div>
  );
});


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
