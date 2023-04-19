import React from "react";
import "./index.css";
import UserProfile from "./Components/UserProfile.js";
import Posts from "./Components/Posts.js";
import Contacts from "./Components/Contacts.js";
import NavBar from "./Components/NavBar.js";

//parent

function App() {
  return (
    <div>
      <NavBar />
      <UserProfile />
      <Posts />
      <Contacts />
    </div>
  );
}

export default App;
