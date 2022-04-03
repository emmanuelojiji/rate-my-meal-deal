import "./Access.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import NavBar from "../Components/NavBar";

import { db } from "../firebase-config";
import { setDoc, doc } from "firebase/firestore";

const Access = () => {
  const [isSignInShown, setIsSignInShown] = useState(true);

  const [signUpUsername, setSignUpUsername] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const signUp = async (e) => {
    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        signUpEmail,
        signUpPassword
      );

      const user = userCredential.user;

      updateProfile(auth.currentUser, { displayName: signUpUsername });

      const signUpObject = {
        signUpUsername,
        signUpEmail,
      };

      await setDoc(doc(db, "users", user.uid), signUpObject);

      navigate("/");

      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const signIn = async (e) => {
    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(
        auth,
        signInEmail,
        signInPassword
      );

      if (userCredential.user) {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <NavBar />
      {isLoading && <div className="loading">LOADING</div>}

      <div className="Access">
        {isSignInShown ? (
          <div className="sign-in-container sign-container">
            <h1 className="access-title">Sign In</h1>

            <div className="input-container">
              <input
                type="text"
                placeholder="Email"
                onChange={(e) => setSignInEmail(e.target.value)}
              ></input>
              <input
                type="text"
                placeholder="Password"
                onChange={(e) => {
                  setSignInPassword(e.target.value);
                }}
              ></input>
            </div>
            <button onClick={signIn}>Sign In</button>

            <span onClick={() => setIsSignInShown(false)} className="switch">
              Sign up instead
            </span>
          </div>
        ) : (
          <div className="sign-up-container sign-container">
            <h1 className="access-title">Sign Up</h1>

            <div className="input-container">
              <input
                type="text"
                placeholder="Username"
                onChange={(e) => setSignUpUsername(e.target.value)}
              ></input>
              <input
                type="text"
                placeholder="Email"
                onChange={(e) => setSignUpEmail(e.target.value)}
              ></input>
              <input
                type="text"
                placeholder="Password"
                onChange={(e) => setSignUpPassword(e.target.value)}
              ></input>
            </div>

            <button
              onClick={() => {
                signUp();
                setIsLoading(true);
              }}
            >
              Sign Up
            </button>
            <span onClick={() => setIsSignInShown(true)} className="switch">
              Sign in instead
            </span>
          </div>
        )}
      </div>
    </>
  );
};

export default Access;
