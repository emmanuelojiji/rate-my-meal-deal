import "./Access.scss";
import { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";

const Access = () => {
  const [isSignInShown, setIsSignInShown] = useState(true);

  const [signUpUsername, setSignUpUsername] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");

  const navigate = useNavigate();

  const signUp = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        signUpEmail,
        signUpPassword,
        signUpUsername
      );

      navigate("/");

      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const signIn = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        signInEmail,
        signInPassword
      );

      navigate("/");

      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const signOut = async () => {};

  return (
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
              onChange={(e) => setSignInPassword(e.target.value)}
            ></input>
          </div>
          <button onClick={signIn}>Sign In</button>

          <span onClick={() => setIsSignInShown(false)}>Sign up instead</span>
        </div>
      ) : (
        <div className="sign-up-container sign-container">
          <h1 className="access-title">Sign Up</h1>

          <div className="input-container">
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

          <button onClick={signUp}>Sign Up</button>
          <span onClick={() => setIsSignInShown(true)}>Sign in instead</span>
        </div>
      )}
    </div>
  );
};

export default Access;
