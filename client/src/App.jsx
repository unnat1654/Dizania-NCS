import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import ForgotPassword from "./pages/auth/ForgotPassword";
import Signup from "./pages/auth/Signup";
import Upload from "./pages/Upload";
import Login from "./pages/auth/Login";
import Create from "./pages/profile/create/Create";
import Show from "./pages/profile/show/Show";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/create_profile" element={<Create />} />
        <Route path="/show_profile" element={<Show user={""}/>} />
      </Routes>
    </div>
  );
}

export default App;
