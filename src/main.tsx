import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RegisterProfessionalPage from "./pages/RegisterProfessionalPage";
import RegisterUserPage from "./pages/RegisterUserPage";
import LoginPage from "./pages/LoginPage";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename="/soloclick">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/register-professional"
          element={<RegisterProfessionalPage />}
        />
        <Route path="/register-user" element={<RegisterUserPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
