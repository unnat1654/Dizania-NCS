import React, { useEffect, useRef } from "react";
import Layout from "../components/Layout";
import { useAuth } from "../context/auth";
import { useNavigate } from "react-router-dom";
import Tilt from "react-parallax-tilt";
import homecontest from "../assets/home-contest.svg";
import cuboid from "../assets/cuboid.svg";
import dicons from "../assets/3dicons.svg";
import panetwogradient from "../assets/home-gradient-background.svg";
import pane2eclipse from "../assets/pane2eclipse.svg";
import pane2graphic from "../assets/pane2graphic.svg";
import pane3x from "../assets/pane-3-x.svg";
import pane3up from "../assets/pane-3-up.svg";
import pane3search from "../assets/pane-3-search.svg";
import pane4img from "../assets/pane-4-img.png";
import pane5background from "../assets/pane-5-background.svg";
import pane5apply from "../assets/pane-5-apply.svg";
import pane5learn from "../assets/pane-5-learn.svg";
import pane5share from "../assets/pane-5-share.svg";
import pane6innercircle from "../assets/pane-6-inner-circle.svg";
import pane6middlecircle from "../assets/pane-6-middle-circle.svg";
import pane6outercircle from "../assets/pane-6-outer-circle.svg";

const Home = () => {
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="pane-1">
        <img src={cuboid} alt="graphic" className="pane-1-cuboid" />
        <img src={dicons} alt="graphic" className="pane-1-3dicons" />
        <div className="pane-1-scroller">
          <img
            src={homecontest}
            className="pane-1-scroller-item"
            alt="events"
          />
          <img
            src={homecontest}
            className="pane-1-scroller-item"
            alt="events"
          />
          <img
            src={homecontest}
            className="pane-1-scroller-item"
            alt="events"
          />
          <img
            src={homecontest}
            className="pane-1-scroller-item"
            alt="events"
          />
          <img
            src={homecontest}
            className="pane-1-scroller-item"
            alt="events"
          />
        </div>
        <button
          className="home-buttons pane-1-join-button"
          onClick={() => {
            navigate("/signup");
          }}
        >
          JOIN US
        </button>
      </div>
      <div className="pane-2">
        <img src={panetwogradient} className="pane-two-gradient" />
        <img src={pane2eclipse} className="pane-two-eclipse" />
        <img src={pane2graphic} className="pane-two-graphic" />
        <p className="pane-2-text-main">We know you are a great designer</p>
        <p className="pane-2-text-sub">Present Your Work</p>
        <button
          className="home-buttons pane-2-post-button"
          onClick={() => {
            navigate("/upload");
          }}
        >
          POST
        </button>
      </div>
      <div className="pane-3">
        <p className="pane-3-text-main">What Is Dizania?</p>
        <p className="pane-3-text-sub">
          A platform for designers where they can
        </p>
        <div className="pane-3-table">
          <div className="pane-3-table-row">
            <div>
              <img
                src={pane3x}
                alt=""
                className="pane-3-graphics-x pane-3-graphics"
              />
            </div>
            <span>particiapate in design competitions</span>
          </div>
          <div className="pane-3-table-row">
            <div>
              <img src={pane3up} alt="" className="pane-3-graphics" />
            </div>
            <span>upload your work</span>
          </div>
          <div className="pane-3-table-row">
            <div>
              <img src={pane3search} alt="" className="pane-3-graphics" />
            </div>
            <span>discover, there are many like you</span>
          </div>
        </div>
      </div>
      <div className="pane-4">
        <p className="pane-4-text">
          DESIGN IS NOT AN ART <br />
          IT CONVEYS YOUR MESSAGE
        </p>
        <div className="pane-4-image">
          <img src={pane4img} className="pane-4-image-img" />
        </div>
      </div>
      <div className="pane-5">
        <img src={pane5background} className="pane-5-background" />
        <Tilt className="pane-5-item">
          <img src={pane5learn} />
        </Tilt>
        <Tilt className="pane-5-item">
          <img src={pane5apply} />
        </Tilt>
        <Tilt className="pane-5-item">
          <img src={pane5share} />
        </Tilt>
      </div>
      <div className="pane-6">
        <img src={pane6innercircle} className="pane-6-inner-circle" />
        <img src={pane6middlecircle} className="pane-6-middle-circle" />
        <img src={pane6outercircle} className="pane-6-outer-circle" />
        <div className="pane-6-paragraph">
          <span>
            be it any tool <br />
            it's your idea <br />
            your potential
          </span>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
