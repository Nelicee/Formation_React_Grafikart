import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ThemeContextProvider } from "./hooks/useTheme.jsx";
import React from 'react';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </StrictMode>
);
