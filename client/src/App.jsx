import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import ForgotPassword from "./pages/auth/ForgotPassword";
import Signup from "./pages/auth/Signup";
import Upload from "./pages/Upload";
import Login from "./pages/auth/Login";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
    </div>
  );
}

export default App;
