import { GoogleOAuthProvider } from "@react-oauth/google";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ProvideAuth } from "./auth/authContext.jsx";
import { Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="308917092914-4l1gaht1ss4pjblhng68enljk3egl41t.apps.googleusercontent.com">
      <BrowserRouter>
        <ProvideAuth>
          <App />
        </ProvideAuth>
      </BrowserRouter>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
