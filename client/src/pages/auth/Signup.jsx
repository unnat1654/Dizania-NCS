import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../../context/auth";
import Layout from "../../components/Layout";
import dIcons from "../../assets/3dicons.svg";
import rafiki from "../../assets/rafiki.svg";

const Signup = () => {
  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [reEnterPassword, setReEnterPassword] = useState();
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        navigate("/login");
      }, 4000);
    }
  }, [loading]);
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      if (password === reEnterPassword) {
        const { data } = await axios.post(
          `${import.meta.env.VITE_PUBLIC_API_URL}/v1/auth/register`,
          { username: userName, email, password }
        );
        if (data?.success) {
          toast.success(data?.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
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
      } else {
        setLoading(false);
        toast.warning(`Passwords do not match`, {
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
      toast.error(error?.response?.data.message, {
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
      <ToastContainer
        position="top-right"
        autoClose={5000}
        limit={3}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="signup-main">
        <span className="signup-heading">SIGN UP</span>
        <div className="signup-box">
          <img src={rafiki} className="rafiki" height={312} width={406} />
          <img src={dIcons} className="figmaimg" height={118} width={118} />
          <form>
            <input
              type="text"
              placeholder="Name"
              className="signup-input"
              required
            />
            <input
              type="text"
              className="signup-input"
              placeholder="User Name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
            <input
              type="email"
              className="signup-input"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              className="signup-input"
              placeholder="Create Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <input
              type="password"
              className="signup-input"
              placeholder="Re-enter Password"
              value={reEnterPassword}
              onChange={(e) => setReEnterPassword(e.target.value)}
              required
            />
            <div className="signup-button-wrap">
              <button
                type="submit"
                className="signup-button"
                onClick={handleSubmit}
              >
                Continue
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Signup;
