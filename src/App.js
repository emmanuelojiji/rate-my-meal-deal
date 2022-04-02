import "./App.css";
import Post from "./Components/Post";
import { useState } from "react";
import { auth } from "./firebase-config";
import {Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Access from "./Pages/Access";
import Feed from "./Pages/Feed";
import Profile from "./Pages/Profile";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/access" element={<Access />} />
        <Route path="/" element={<Feed />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
