import React, { useRef, useState } from "react";
import styles from "./Create.module.css";
import header from "./assets/header.svg";
import profileImg from "./assets/img.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [selectedConnections, setSelectedConnections] = useState([]);
  const [selectedTools, setSelectedTools] = useState([]);
  const [selectedFile, setSelectedFile] = useState("");
  const navigate = useNavigate();
  const handleDropdownChangeConnections = (event) => {
    const selectedValue = event.target.value;
    if (selectedValue !== "Add Connections") {
      setSelectedConnections((prevConnections) => [
        ...prevConnections,
        selectedValue,
      ]);
    }
  };

  const handleDropdownChangeTools = (event) => {
    const selectedValue = event.target.value;
    if (selectedValue !== "Add Tools") {
      setSelectedTools((prevTools) => [...prevTools, selectedValue]);
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
      const apiUrl = `${
        import.meta.env.VITE_PUBLIC_API_URL
      }/v1/auth/create-profile`;

      const formData = {
        name,
        bio,
        connections: selectedConnections,
        tools: selectedTools,
        image: selectedFile,
      };

      console.log(formData);
      const response = await axios.post(apiUrl, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Response from server:", response.data);

      const profileData = response.data.profile;

      // Use navigate to go to show_profile with profile data
      navigate("/show_profile", { state: { profile: profileData } });
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
            {selectedFile ? (
              <img
                src={URL.createObjectURL(selectedFile)}
                alt="profile Img"
                style={{ width: "100%", height: "100%",borderRadius:"50%" }}
              />
            ) : (
              <img
                src={profileImg}
                alt="profile Img"
                style={{ width: "100%", height: "100%" }}
              />
            )}
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
              // multiple
            >
              <option value="Add Connections">Add Connections</option>
              <option value="linkedin">LinkedIn</option>
              <option value="instagram">Instagram</option>
              <option value="twitter">Twitter</option>
              <option value="facebook">Facebook</option>
              <option value="behance">Behance</option>
            </select>
          </div>
          <div className={styles.customSelect}>
            <select
              className={`${styles.select}`}
              value={selectedTools}
              onChange={handleDropdownChangeTools}
              // multiple
            >
              <option value="Add Tools">Add Tools</option>
              <option value="Figma">Figma</option>
              <option value="adobe-photoshop">Adobe Photoshop</option>
              <option value="sketch">Sketch</option>
              <option value="adobe-indesign">Adobe Indesign</option>
              <option value="adobe-xd">Adobe Xd</option>
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
