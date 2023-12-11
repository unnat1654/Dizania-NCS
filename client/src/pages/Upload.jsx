import React from "react";
import Layout from "../components/Layout";
import { useAuth } from "../context/auth";
import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Upload = () => {
  const [image, setImage] = useState("");
  const [caption, setCaption] = useState("");
  const [auth, setAuth] = useAuth();
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const [tools, setTools] = useState([]);
  const [usedTool, setUsedTool] = useState();

  const handleImage = (e) => {
    const file = e.target.files[0];
    setFileToBase(file);
  };

  const setFileToBase = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(reader.result);
    };
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_PUBLIC_API_URL}/v1/post/create-post`,
        {
          user: auth?.user?._id,
          image,
          caption,
          tool: usedTool,
        }
      );
      if (data?.success) {
        toast.success("Post Created Successfully");
        navigate("/discover");
      } else {
        toast.error(data?.message, {
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

  const getTools = async () => {
    try {
      const ls_tools = JSON.parse(localStorage.getItem("tools"));
      if (!ls_tools) {
        const { data } = await axios.get(
          `${import.meta.env.VITE_PUBLIC_API_URL}/v1/tool/get-tools`
        );
        if (data) {
          localStorage.setItem("tools", JSON.stringify(data?.tools));
        }
        setTools(data?.tools);
      } else {
        setTools(ls_tools);
      }
    } catch (error) {
      console.error("Error while getting tools\n" + error);
    }
  };
  useEffect(() => {
    if (page == 2) {
      getTools();
    }
  }, [page]);

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
      <div className="upload-main">
        {page == 1 ? (
          <div className="uploadimg-box">
            <p className="uploadimg--heading">CREATE A NEW POST</p>
            <label
              htmlFor="comp-upload"
              style={{ marginLeft: "3vw", width: "100%" }}
            >
              <div className="upload-button">select from your computer</div>
              <input
                type="file"
                id="comp-upload"
                onChange={handleImage}
                className="upload-button"
              />
            </label>
            <label
              htmlFor="drive-upload"
              style={{ marginLeft: "3vw", width: "100%" }}
            >
              <div className="upload-button">select from your computer</div>
              <input
                type="file"
                accept="image/*"
                id="drive-upload"
                className="upload-button"
              />
            </label>
            {image && (
              <img src={image} alt="" width={"300px"} height={"300px"} />
            )}

            <button
              className="submit-button"
              onClick={() => {
                if (image) {
                  setPage(2);
                } else {
                  toast.error("Please upload an image", {
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
              }}
            >
              Upload
            </button>
          </div>
        ) : (
          <div>
            <div className="post-box">
              <p className="post-heading">CREATE A NEW POST</p>
              <hr
                style={{
                  height: "0.6px",
                  backgroundColor: "#6681B9",
                  border: "none",
                  marginLeft: "2vw",
                  marginRight: "2vw",
                }}
              />
              <div className="post-main">
                {image && (
                  <img src={image} alt="image" width={300} height={300} />
                )}
                <div className="post-main-typed">
                  <textarea
                    type="text"
                    className="caption-input"
                    placeholder="Enter caption"
                    value={caption}
                    onChange={(e) => {
                      setCaption(e.target.value);
                    }}
                    maxLength={100}
                    rows={3}
                  />
                  <p className="tools-heading">Tool Used:</p>
                  <div className="tools-list">
                    {tools.map((p) => (
                      <div key={p._id}>
                        <input
                          type="radio"
                          id={p._id}
                          name="tool"
                          value={p._id}
                          className="tools-list-input"
                          onClick={(e) => setUsedTool(e.target.value)}
                        />
                        <label className="tools-list-label" htmlFor={p._id}>
                          <img className="tools-list-image" src={p.logo} />
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <button
                className="submit-button post-button"
                onClick={handleSubmit}
              >
                POST
              </button>
            </div>
          </div>
        )}
      </div>
      <ToastContainer />
    </Layout>
  );
};

export default Upload;
