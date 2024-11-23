import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "./components/Theme/ThemeContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <RouterProvider router={router}> */}
    <ThemeProvider>
      <App />
      <Toaster />
    </ThemeProvider>
    {/* </RouterProvider> */}
  </StrictMode>
);
