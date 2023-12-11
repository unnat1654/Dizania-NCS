import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import ForgotPassword from "./pages/auth/ForgotPassword";
import Signup from "./pages/auth/Signup";
import Upload from "./pages/Upload";
import Login from "./pages/auth/Login";
import Home from "./pages/Home";
<<<<<<< Updated upstream
import Create from "./pages/profile/create/Create";
import Show from "./pages/profile/show/Show";
import Header from "./components/Header";
import Footer from "./components/Footer";
=======
import Discover from "./pages/discover";
>>>>>>> Stashed changes

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/upload" element={<Upload />} />
<<<<<<< Updated upstream
        <Route path="/create_profile" element={<Create />} />
        <Route path="/show_profile" element={<Show user={""} />} />
=======
        <Route path="/discover" element={<Discover />} />
>>>>>>> Stashed changes
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
