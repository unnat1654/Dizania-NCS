import React, { useRef, useState } from "react";
import styles from "./Create.module.css";
import header from "./assets/header.svg";
import profileImg from "./assets/img.svg";
import axios from "axios";

const Create = () => {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [selectedConnections, setSelectedConnections] = useState("");
  const [selectedTools, setSelectedTools] = useState("");
  const [selectedFile, setSelectedFile] = useState("");
  const handleDropdownChangeConnections = (event) => {
    if (event.target.value !== "Add Connections") {
      setSelectedConnections(event.target.value);
    }
  };

  const handleDropdownChangeTools = (event) => {
    if (event.target.value !== "Add Tools") {
      setSelectedTools(event.target.value);
    }
  };

  const fileInputRef = useRef(null);

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const selectedFiles = event.target.files[0];
    if (selectedFiles && selectedFiles.type.startsWith("image/")) {
      setSelectedFile(selectedFiles);
      console.log("Selected File:", selectedFiles);
    } else {
      window.location.href = "/create_profile";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const apiUrl = "https://your-backend-api.com/submit";

      const formData = {
        name,
        bio,
        connections: selectedConnections,
        tools: selectedTools,
        image: selectedFile,
      };
      console.log(formData);
      // const response = await axios.post(apiUrl, formData, {
      //   headers: {
      //     'Content-Type': 'multipart/form-data',
      //   },
      // });

      // console.log('Response from server:', response.data);

      // Handle the response as needed
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <img src={header} alt="" className={styles.img} />
      </div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.upper}>
          <div className={styles.imgContainer} onClick={handleImageClick}>
            <p className={styles.addText}>Add Image</p>
            <img
              src={profileImg}
              alt="profile Img"
              style={{ width: "100%", height: "100%" }}
            />
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
          </div>
          <div className={styles.nameContainer}>
            <label htmlFor="name" className={styles.label}>
              <input
                type="text"
                className={styles.input}
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label htmlFor="bio" className={styles.label}>
              <textarea
                name="bio"
                id="bio"
                cols="30"
                rows="10"
                placeholder="Add Bio"
                className={styles.input}
                value={bio}
                onChange={(e) => setBio(e.target.value)}
              />
            </label>
          </div>
        </div>
        <div className={styles.lower}>
          <div className={styles.customSelect}>
            <select
              className={`${styles.select}`}
              value={selectedConnections}
              onChange={handleDropdownChangeConnections}
            >
              <option value="Add Connections">Add Connections</option>
              <option value="linkedin">LinkedIn</option>
              <option value="Instagram">Instagram</option>
              <option value="Twitter">Twitter</option>
            </select>
          </div>
          <div className={styles.customSelect}>
            <select
              className={`${styles.select}`}
              value={selectedTools}
              onChange={handleDropdownChangeTools}
            >
              <option value="Add Tools">Add Tools</option>
              <option value="Figma">Figma</option>
            </select>
          </div>
          <label htmlFor="name" className={styles.label}>
            <input
              type="text"
              className={styles.input}
              placeholder="Add Your Design Qoute"
            />
          </label>
        </div>
        <div className={styles.btnWrap}>
          <button className={styles.btn}>Continue</button>
        </div>
      </form>
    </div>
  );
};

export default Create;
