"use client";

import Layout from "@/components/Layout";
import { useAuth } from "@/context/auth";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";

const Upload = () => {
  const [image, setImage] = useState("");
  const [caption, setCaption] = useState("");
  const [auth, setAuth] = useAuth();
  const [page, setPage] = useState(1);

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
        `${process.env.NEXT_PUBLIC_API_URL}/v1/post/create-post`,
        { user: auth?.user?._id, image, caption }
      );
      if (data?.success) {
        toast.success("Post Created Successfully");
      }
    } catch (error) {}
  };

  // const checkLogIn = () => {
  //   if (auth?.user) {
  //     router.push("/login");
  //   }
  // };
  // useEffect(() => {
  //   checkLogIn();
  // }, []);
  return (
    <div>
      <Layout>
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
              {image && <Image src={image} alt="" width={300} height={300} />}

              <button
                className="submit-button"
                onClick={() => {
                  setPage(2);
                }}
              >
                Submit
              </button>
            </div>
          ) : (
            <>
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
                    <Image src={image} alt="" width={300} height={300} />
                  )}
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
                </div>
                <button
                  className="submit-button post-button"
                  onClick={handleSubmit}
                >
                  POST
                </button>
              </div>
            </>
          )}
        </div>
        <ToastContainer />
      </Layout>
    </div>
  );
};

export default Upload;
