import React from "react";
import logo from "../assets/logo.svg";
import { useAuth } from "../context/auth";
import { Link, useNavigate } from "react-router-dom";
const Header = () => {
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();
  return (
    <div>
      <div className="Hnavigation-bar">
        <ul>
          <li>
            <Link to="/">
              <img src={logo} className="logo" />
            </Link>
          </li>
          <li>
            <Link to="/participate">PARTICIPATE</Link>
          </li>
          <li>
            <Link to="/discover">DISCOVER</Link>
          </li>
          {auth?.user ? (
            <>
              <li>
                <Link to="/profile">PROFILE</Link>
              </li>
              <li className="navigation-button">
                <button
                  onClick={() => {
                    router.push("/upload");
                  }}
                >
                  UPLOAD
                </button>
              </li>
            </>
          ) : (
            <li className="navigation-button">
              <button
                onClick={() => {
                  router.push("/signup");
                }}
              >
                JOIN US
              </button>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
