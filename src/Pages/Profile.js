import "./Profile.scss";
import NavBar from "../Components/NavBar";
import { getAuth } from "firebase/auth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const auth = getAuth();

  const navigate = useNavigate();

  const signOut = () => {
    auth.signOut();

    navigate("/access");
  };

  return (
    <>
      <NavBar />
      <div className="Profile">
        <h1>Profile</h1>
        <span>User: {auth.currentUser.displayName}</span>

        <button onClick={signOut}>Log Out</button>
      </div>
    </>
  );
};

export default Profile;
