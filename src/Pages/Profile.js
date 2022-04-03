import "./Profile.scss";
import NavBar from "../Components/NavBar";
import { getAuth } from "firebase/auth";
import { useEffect } from "react";

const Profile = () => {

const auth = getAuth();

  return (
    <div className="Profile">
      <h1>Profile</h1>
      <span>User: {auth.currentUser.email}</span>
      <NavBar />

      <button>Log Out</button>
    </div>
  );
};

export default Profile;
