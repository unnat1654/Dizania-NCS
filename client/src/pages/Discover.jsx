import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import like from "../assets/thumbs-up.svg";
import unlike from "../assets/thumbs-down.svg";
import axios from "axios";
import { useAuth } from "../context/auth";

const Discover = () => {
  const [liked, setLiked] = useState(false);
  const [page, setPage] = useState(1);
  const [postList, setPostList] = useState([]);
  const [active, setActive] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [auth, setAuth] = useAuth();
  const getPosts = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(
        `${
          import.meta.env.VITE_PUBLIC_API_URL
        }/v1/post/get-posts?p=${page}&lmt=12`
      );
      setPostList((prevItems) => [...prevItems, ...data.posts]);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getPosts();
  }, []);

  const changeActive = (_id) => {
    const index = postList.findIndex((p) => p._id == _id);
    setActive(postList[index]);
    setLiked(false);
  };
  const handleLike = async (like, post_id) => {
    try {
      if (!auth?.user) {
        return;
      }
      like ? setLiked(true) : setLiked(false);
      const { data } = await axios.patch(
        `${import.meta.env.VITE_PUBLIC_API_URL}/v1/post/like-post`,
        { like, post_id, user_id: auth?.user?._id }
      );
    } catch (error) {
      console.log(error);
    }
  };
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    ) {
      return;
    }
    getPosts();
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoading]);
  return (
    <Layout>
      <div className="discover-nav-bar">
        <span className="discover-nav-bar-text">
          CLICK TO JOIN CURRENTLY GOING COMPETITION{" "}
        </span>
        {active ? (
          <div
            onMouseLeave={() => {
              setActive({});
              setLiked(false);
            }}
            className={
              active._id
                ? `discover-active-post`
                : `discover-active-post-hidden`
            }
          >
            <img
              src={active.image && active.image.secure_url}
              style={{ height: "600px" }}
              className="discover-active-post-image"
            />
            <div className="discover-active-post-info">
              <p className="discover-active-post-info-username">
                {active.user && active.user.username}
              </p>
              {liked ? (
                <img
                  src={unlike}
                  onClick={() => {
                    handleLike(false, active._id);
                  }}
                  className="thumbs-down"
                />
              ) : (
                <img
                  src={like}
                  onClick={() => {
                    handleLike(true, active._id);
                  }}
                  className="thumbs-up"
                />
              )}
              <p className="discover-active-post-info-caption">
                {active.caption}
              </p>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
      <div className="discover-list">
        <div className="discover-list-column">
          {postList.slice(0, postList.length / 4 + 1).map((p) => (
            <img
              src={p.image.secure_url}
              className="discover-list-column-item"
              onClick={() => {
                changeActive(p._id);
              }}
              key={p._id}
            />
          ))}
        </div>
        <div className="discover-list-column">
          {postList
            .slice(postList.length / 4 + 1, postList.length / 2 + 1)
            .map((p) => (
              <img
                src={p.image.secure_url}
                className="discover-list-column-item"
                onClick={() => {
                  changeActive(p._id);
                }}
                key={p._id}
              />
            ))}
        </div>
        <div className="discover-list-column">
          {postList
            .slice(postList.length / 2 + 2, (3 * postList.length) / 4 + 1)
            .map((p) => (
              <img
                src={p.image.secure_url}
                className="discover-list-column-item"
                onClick={() => {
                  changeActive(p._id);
                }}
                key={p._id}
              />
            ))}
        </div>
        <div className="discover-list-column">
          {postList
            .slice((3 * postList.length) / 4 + 1, postList.length + 1)
            .map((p) => (
              <img
                src={p.image.secure_url}
                className="discover-list-column-item"
                onClick={() => {
                  changeActive(p._id);
                }}
                key={p._id}
              />
            ))}
        </div>
      </div>
    </Layout>
  );
};

export default Discover;
