import React from "react";
import styles from "./Show.module.css";
import postImg from "./assets/post.png";
import rankImg from "./assets/rank.svg";
import profileImg from "./assets/img.svg";
import starImg from "./assets/Star.svg";
import linkedin from "./assets/linkedin.png";
import behance from "./assets/behance.png";
import dribble from "./assets/dribble.png";
import facebook from "./assets/facebook.png";
import instagram from "./assets/instagram.png";
import figma from "./assets/figma.png";
import adobe_photoshop from "./assets/adobe-photoshop.png";
import sketch from "./assets/sketch.png";
import adobe_xd from "./assets/adobe-xd.png";
import adobe_indesign from "./assets/adobe-indesign.png";

const Show = ({ user }) => {
  // const {
  //   name = "Ashline Rodrigoz",
  //   stars = 4,
  //   bio = "Passionate UI/UX Designer | 🎨 Creating Seamless Experiences |Problem Solver Extraordinaire | Let's Craft Digital Magic! ✨ #UIUXDesign",
  //   quote = "Designing interfaces isn't just about pixels; it's about creating experiences that leave a lasting impression.",
  //   post = [
  //     {
  //       img: { post },
  //       link: "www.google.com",
  //     },
  //     {
  //       img: { post },
  //       link: "www.google.com",
  //     },
  //     {
  //       img: { post },
  //       link: "www.google.com",
  //     },
  //     {
  //       img: { post },
  //       link: "www.google.com",
  //     },
  //     {
  //       img: { post },
  //       link: "www.google.com",
  //     },
  //     {
  //       img: { post },
  //       link: "www.google.com",
  //     },
  //     {
  //       img: { post },
  //       link: "www.google.com",
  //     },
  //     {
  //       img: { post },
  //       link: "www.google.com",
  //     },
  //   ],
  //   connections = ["linkedin", "behance", "instagram"],
  //   tools = ["figma"],
  //   rank = 1,
  //   numCompetitions = 34,
  //   currStreak = 24,
  //   maxStreak = 62,
  // } = user;
  const name = "Ashline Rodrigoz";
  const stars = 4;
  const img = profileImg;
  const bio =
    "Passionate UI/UX Designer | 🎨 Creating Seamless Experiences |Problem Solver Extraordinaire | Let's Craft Digital Magic! ✨ #UIUXDesign";
  const quote =
    "Designing interfaces isn't just about pixels; it's about creating experiences that leave a lasting impression.";
  const post = [
    {
      img: postImg,
      link: "www.google.com",
    },
    {
      img: postImg,
      link: "www.google.com",
    },
    {
      img: postImg,
      link: "www.google.com",
    },
    {
      img: postImg,
      link: "www.google.com",
    },
    {
      img: postImg,
      link: "www.google.com",
    },
    {
      img: postImg,
      link: "www.google.com",
    },
    {
      img: postImg,
      link: "www.google.com",
    },
    {
      img: postImg,
      link: "www.google.com",
    },
  ];
  const connections = ["linkedin", "behance", "instagram", "dribble"];
  const tools = [
    "figma",
    "adobe-photoshop",
    "sketch",
    "adobe-indesign",
    "adobe-xd",
  ];
  const rank = 1;
  const numCompetitions = 34;
  const currStreak = 24;
  const maxStreak = 62;
  return (
    <div className={styles.show}>
      <div className={styles.upper}>
        <div className={styles.textWrap}>
          <div className={styles.profile}>
            <div className={styles.profileImgC}>
              <img src={img} alt="" className={styles.profieImage} />
            </div>
            <div className={styles.nameC}>
              <p className={styles.name}>{name}</p>
              <div className={styles.starsC}>
                {Array.from({ length: stars }, (_, index) => (
                  <img
                    key={index}
                    src={starImg}
                    alt={`Star ${index + 1}`}
                    className={styles.star}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className={styles.bio}>{bio}</div>
          <div className={styles.connectC}>
            <div className={styles.connectText}>Connect</div>
            <div className={styles.connectIconsC}>
              {connections.map((connects) => {
                return (
                  <div className={styles.connectW}>
                    {connects === "linkedin" ? (
                      <img
                        src={linkedin}
                        alt=""
                        className={styles.connectsImg}
                      />
                    ) : connects === "instagram" ? (
                      <img
                        src={instagram}
                        alt=""
                        className={styles.connectsImg}
                      />
                    ) : connects === "behance" ? (
                      <img
                        src={behance}
                        alt=""
                        className={styles.connectsImg}
                      />
                    ) : connects === "dribble" ? (
                      <img
                        src={dribble}
                        alt=""
                        className={styles.connectsImg}
                      />
                    ) : (
                      <img
                        src={facebook}
                        alt=""
                        className={styles.connectsImg}
                      />
                    )}
                  </div>
                );
              })}
            </div>
            <p></p>
          </div>
          <div className={styles.toolsC}>
            <div className={styles.toolsText}>Tools</div>
            <div className={styles.toolsW}>
              {tools.map((tool) => {
                return (
                  <div className={styles.toolW}>
                    {tool === "figma" ? (
                      <img src={figma} alt="" className={styles.toolsIcon} />
                    ) : tool === "adobe-photoshop" ? (
                      <img
                        src={adobe_photoshop}
                        alt=""
                        className={styles.toolsIcon}
                      />
                    ) : tool === "sketch" ? (
                      <img src={sketch} alt="" className={styles.toolsIcon} />
                    ) : tool === "adobe-xd" ? (
                      <img src={adobe_xd} alt="" className={styles.toolsIcon} />
                    ) : (
                      <img
                        src={adobe_indesign}
                        alt=""
                        className={styles.toolsIcon}
                      />
                    )}
                  </div>
                );
              })}
            </div>
            <div className={styles.mostused}>
              <div className={styles.toolsText}>Most used tool</div>
              <div className={styles.toolsW}>
                {tools.map((tool) => {
                  return (
                    <div className={styles.toolW}>
                      {tool === "figma" ? (
                        <img src={figma} alt="" className={styles.toolsIcon} />
                      ) : tool === "adobe-photoshop" ? (
                        <img
                          src={adobe_photoshop}
                          alt=""
                          className={styles.toolsIcon}
                        />
                      ) : tool === "sketch" ? (
                        <img src={sketch} alt="" className={styles.toolsIcon} />
                      ) : tool === "adobe-xd" ? (
                        <img
                          src={adobe_xd}
                          alt=""
                          className={styles.toolsIcon}
                        />
                      ) : (
                        <img
                          src={adobe_indesign}
                          alt=""
                          className={styles.toolsIcon}
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.rank}>
          <div className={styles.rankImgC}>
            <img src={rankImg} alt="Rank" className={styles.badge} />
          </div>
          <p className={styles.ranktext}>RANK - {rank}</p>
          <div className={styles.competitions}>
            <p>No. Of Competitions Participated</p>
            <p>{numCompetitions}</p>
          </div>
          <div className={styles.streak}>
            <p className={styles.ranktext}>STREAK</p>
            <div className={styles.streaks}>
              <p>Current Streak - {currStreak} </p>
              <p>Max Streak - {maxStreak}</p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className={styles.lower}>{post.map()}</div> */}
    </div>
  );
};

export default Show;
