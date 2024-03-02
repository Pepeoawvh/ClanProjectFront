import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { UsersProvider } from "./context/users/UsersProvider.jsx";
import "tw-elements-react/dist/css/tw-elements-react.min.css";
import "./main.css";
import { ClanesProvider } from "./context/clanes/ClanesProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter> 
      <UsersProvider>
        <ClanesProvider>
          <App />
        </ClanesProvider>
      </UsersProvider>
    </BrowserRouter>
  </React.StrictMode>
);
