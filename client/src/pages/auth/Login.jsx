import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useAuth } from "../../context/auth";
import Layout from "../../components/Layout";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const [auth, setAuth] = useAuth();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        navigate("/");
      }, 6000);
    }
  }, [loading]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { data } = await axios.post("/v1/auth/login", { email, password });
      if (data?.success) {
        setAuth({
          ...auth,
          user: data.user,
          token: data.token,
        });
        localStorage.setItem("auth", JSON.stringify(data));

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
  });
  return (
    <Layout>
      <div>
        <div className="login-main">
          <span className="login-heading">LOG IN</span>
          {JSON.stringify(auth)}
          <div className="login-box">
            <form>
              <input
                type="email"
                className="login-input"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                className="login-input"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <Link
                className="login-forgot-password-link"
                to="/forgot-password"
              >
                Forgot Password
              </Link>
              <div className="login-button-wrap">
                <button
                  type="submit"
                  className="login-button"
                  onClick={handleSubmit}
                >
                  Continue
                </button>
              </div>
            </form>
            <span className="login-span">
              not a member? <Link to="/signup">JOIN</Link>
            </span>
          </div>
        </div>
      </div>
      <ToastContainer />
    </Layout>
  );
};

export default Login;
