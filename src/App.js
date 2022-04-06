import "./App.css";
import Post from "./Components/Post";
import { useState } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Access from "./Pages/Access";
import Feed from "./Pages/Feed";
import Profile from "./Pages/Profile";
import PrivateRoute from "./PrivateRoute";
import { getAuth } from "firebase/auth";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/access" element={<Access />} />
        <Route path="/" element={<Feed />} />
        <Route path="/profile" element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
