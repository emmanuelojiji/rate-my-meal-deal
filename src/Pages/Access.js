import "./Access.scss";
import { useState } from "react";

const Access = () => {
  const [isSignInShown, setIsSignInShown] = useState(true);
  return (
    <div className="Access">
      {isSignInShown ? (
        <div className="sign-in-container sign-container">
            <h1 className="access-title">Sign In</h1>

            <div className="input-container">
          <input type="text" placeholder="Username"></input> 
          <input type="text" placeholder="Password"></input>
          </div>

          <span onClick={() => setIsSignInShown(false)}>Sign up instead</span>
        </div>
      ) : (
        <div className="sign-up-container">
            <h1 className="access-title">Sign Up</h1>

            <div className="input-container">
          <input type="text" placeholder="Username"></input> 
          <input type="text" placeholder="Password"></input>
          <input type="text" placeholder=" Confirm Password"></input>
          </div>

          <span onClick={() => setIsSignInShown(true)}>Sign in instead</span>
        </div>
      )}
    </div>
  );
};

export default Access;
