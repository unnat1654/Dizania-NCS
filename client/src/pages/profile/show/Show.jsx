import React from "react";
import { Link, useLocation } from "react-router-dom";
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
  const location = useLocation();
  console.log("Used Data from Show.jsx", user);
  const { profile: initialProfileData } = location.state || {};
  console.log("profileData", profileData);
  const [profileData, setProfileData] = useState(initialProfileData);

  useEffect(() => {
    // Fetch profile data from the backend if location.state is not available
    if (!initialProfileData) {
      const fetchProfileData = async () => {
        try {
          const apiUrl = `${
            import.meta.env.VITE_PUBLIC_API_URL
          }/v1/auth/create-profile`;
          const response = await axios.get(apiUrl);
          const fetchedProfileData = response.data.profile;

          setProfileData(fetchedProfileData);
        } catch (error) {
          console.error("Error fetching profile data:", error);
        }
      };

      fetchProfileData();
    }
  }, [initialProfileData]);

  let testData = {
    displayName: "Angelina Drako",
    firstName: "John",
    lastName: "Doe",
    stars: 4,
    bio: "Passionate UI/UX Designer | 🎨 Creating Seamless Experiences |Problem Solver Extraordinaire | Let's Craft Digital Magic! ✨ #UIUXDesign",
    quote:
      "Designing interfaces isn't just about pixels; it's about creating experiences that leave a lasting impression.",
    post: [
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
    ],
    connections: [
      {
        platform: "linkedin",
      },
      {
        platform: "behance",
      },
      {
        platform: "instagram",
      },
      {
        platform: "dribble",
      },
      {
        platform: "facebook",
      },
    ],
    tools: ["figma", "adobe-indesign", "adobe-photoshop", "sketch", "adobe-xd"],
    most_used: ["figma", "adobe-xd", "sketch"],
    rank: 1400,
    numCompetitions: 69,
    competition: {
      participated: 141,
      currStreak: 2,
      maxStreak: 14,
    },
    profilePicture: "https://www.gravatar.com/avatar/?d=identicon",
  };
  const {
    displayName: name,
    firstName,
    lastName,
    stars = 4,
    bio = "Passionate UI/UX Designer | 🎨 Creating Seamless Experiences |Problem Solver Extraordinaire | Let's Craft Digital Magic! ✨ #UIUXDesign",
    quote = "Designing interfaces isn't just about pixels; it's about creating experiences that leave a lasting impression.",
    post = [
      {
        img: { post },
        link: "www.google.com",
      },
      {
        img: { post },
        link: "www.google.com",
      },
      {
        img: { post },
        link: "www.google.com",
      },
      {
        img: { post },
        link: "www.google.com",
      },
      {
        img: { post },
        link: "www.google.com",
      },
      {
        img: { post },
        link: "www.google.com",
      },
      {
        img: { post },
        link: "www.google.com",
      },
      {
        img: { post },
        link: "www.google.com",
      },
    ],
    connections = [
      {
        platform: "linkedin",
      },
      {
        platform: "behance",
      },
      {
        platform: "instagram",
      },
      {
        platform: "dribble",
      },
      {
        platform: "facebook",
      },
    ],
    tools = ["figma"],
    most_used,
    rank = 1,

    numCompetitions = 34,
    competition,
    profilePicture: img,
  } = profileData;
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
                    {connects.platform == "linkedin" ? (
                      <img
                        src={linkedin}
                        alt=""
                        className={styles.connectsImg}
                      />
                    ) : connects.platform == "instagram" ? (
                      <img
                        src={instagram}
                        alt=""
                        className={styles.connectsImg}
                      />
                    ) : connects.platform == "behance" ? (
                      <img
                        src={behance}
                        alt=""
                        className={styles.connectsImg}
                      />
                    ) : connects.platform === "dribble" ? (
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
                  <Link to="/" className={styles.toolW}>
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
                  </Link>
                );
              })}
            </div>
            <div className={styles.mostused}>
              <div className={styles.toolsText}>Most used tool</div>
              <div className={styles.toolsW}>
                {most_used.map((tool) => {
                  return (
                    <Link className={styles.toolW}>
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
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
          <div className={styles.statsC}>
            <div className={styles.statsText}>Stats</div>
            <div className={styles.info}>
              <div className={styles.infoPost}>
                <p>No. Of Posts</p>
                <p>{post.length}</p>
                <p></p>
              </div>
              <div className={styles.infoPost}>
                <p>Participation</p>
                <p>{numCompetitions}</p>
                <p></p>
              </div>
            </div>
          </div>
          <div className={styles.quote}>
            <p>{quote}</p>
          </div>
        </div>
        <div className={styles.rank}>
          <div className={styles.rankImgC}>
            <img src={rankImg} alt="Rank" className={styles.badge} />
          </div>
          <p className={styles.ranktext}>RANK - {rank}</p>
          <div className={styles.competitions}>
            <p>No. Of Competitions Participated</p>
            <p>{competition.participated}</p>
          </div>
          <div className={styles.streak}>
            <p className={styles.ranktext}>STREAK</p>
            <div className={styles.streaks}>
              <p>Current Streak - {competition.currStreak} </p>
              <p>Max Streak - {competition.maxStreak}</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.lower}>
        {post.map((Post) => {
          return (
            <Link to={Post.link} className={styles.post}>
              <img src={Post.img} alt={Post.link} className={styles.postImg} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Show;
