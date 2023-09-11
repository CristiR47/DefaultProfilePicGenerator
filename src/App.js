import "./App.css";
import ProfilePicGenerator from "./ProfilePicGenerator";
import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
    console.log("Name updated:", e.target.value);
  };

  return (
    <div className="App">
      <h1>NPC Picture Generator</h1>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={handleNameChange}
      />
      {/* <button onClick={generateProfileImage}>Generate Profile Pic</button> */}
      <ProfilePicGenerator
        style={{ borderRadius: "50%", textTransform: "uppercase" }}
        key={name}
        name={name.toUpperCase()}
      />
    </div>
  );
}

export default App;
