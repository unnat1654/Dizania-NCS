import React from "react";
import Layout from "../components/Layout";
import homecontest from "../assets/home-contest.svg";
import { Link } from "react-router-dom";

const Participate = () => {
  return (
    <Layout>
      <div className="participate-list">
        <div className="participate-list-item">
          <Link to="/">
            <img src={homecontest} />
          </Link>
        </div>
        <div className="participate-list-item">
          <Link to="/">
            <img src={homecontest} />
          </Link>
        </div>
        <div className="participate-list-item">
          <Link to="/">
            <img src={homecontest} />
          </Link>
        </div>
        <div className="participate-list-item">
          <Link to="/">
            <img src={homecontest} />
          </Link>
        </div>
        <div className="participate-list-item">
          <Link to="/">
            <img src={homecontest} />
          </Link>
        </div>
        <div className="participate-list-item">
          <Link to="/">
            <img src={homecontest} />
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Participate;
