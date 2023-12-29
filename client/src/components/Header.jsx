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
              <img src={logo} className="Hnavigation-bar-logo" />
            </Link>
          </li>
          <li>
            <Link className={auth?.user && `loggedin-li`} to="/participate">
              PARTICIPATE
            </Link>
          </li>
          <li>
            <Link className={auth?.user && `loggedin-li`} to="/discover">
              DISCOVER
            </Link>
          </li>
          {auth?.user ? (
            <>
              <li>
                <Link className="loggedin-li" to="/show_profile">
                  PROFILE
                </Link>
              </li>
              <li className="navigation-button">
                <button
                  onClick={() => {
                    navigate("/upload");
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
                  navigate("/signup");
                }}
              >
                JOIN US
              </button>
            </li>
          )}
        </ul>
      </div>
      <div className="proxy-Hnavigation-bar"></div>
    </div>
  );
};

export default Header;
