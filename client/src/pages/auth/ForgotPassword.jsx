import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../context/auth";
import { toast, ToastContainer } from "react-toastify";
import Layout from "../../components/Layout";
const ForgotPassword = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [reEnterPassword, setReEnterPassword] = useState();
  const navigate = useNavigate();
  const [auth, setAuth] = useAuth();

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        navigate("/login");
      }, 4000);
    }
  }, [loading]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (password != reEnterPassword) {
        console.log("Passwords Do Not Match!");
        toast.info("Passwords Do Not Match!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        console.log("Passwords Do Not Match!12");
        setLoading(false);
        return;
      }
      const { data } = await axios.patch(
        `${import.meta.env.VITE_PUBLIC_API_URL}/v1/auth/forgot-password`,
        { email, newPassword: password }
      );
      if (data?.success) {
        toast.success(data?.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: "undefined",
          theme: "light",
        });
      } else {
        setLoading(false);
        toast.warning(data?.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
      toast.error(error?.response?.data?.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  const checkLogIn = () => {
    if (auth?.user) {
      navigate("/");
    }
  };
  useEffect(() => {
    checkLogIn();
  }, []);
  return (
    <Layout>
      <div>
        <div className="fpass-main">
          <span className="fpass-heading">FORGOT PASSWORD</span>
          <div className="fpass-box">
            <form>
              <input
                type="email"
                className="fpass-input"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                className="fpass-input"
                placeholder="Generate Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <input
                type="password"
                className="fpass-input"
                placeholder="Re-enter new Password"
                value={reEnterPassword}
                onChange={(e) => setReEnterPassword(e.target.value)}
                required
              />
              <button
                type="submit"
                className="fpass-button"
                onClick={handleSubmit}
              >
                Continue
              </button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </Layout>
  );
};

export default ForgotPassword;
