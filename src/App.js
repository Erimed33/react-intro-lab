import React from "react";
import "./index.css";
import UserProfile from "./Components/UserProfile.js";
import Posts from "./Components/Posts.js";
import Contacts from "./Components/Contacts.js";
import NavBar from "./Components/NavBar.js";

function App() {
  return (
    <div className="app-main">
      <NavBar/>
      <div className="content-wrapper">
        <div className="user-posts-wrapper">
          <UserProfile/>
          <Posts/>
        </div>
        <Contacts/>
      </div>
    </div>
  );
}

export default App;
