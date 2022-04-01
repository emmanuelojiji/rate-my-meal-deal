import "./App.css";
import Post from "./Components/Post";
import { PostInfo } from "./PostInfo";
import { auth } from "./firebase-config";
import { TwitterAuthProvider, signInWithRedirect } from "firebase/auth";

function App() {
  const provider = new TwitterAuthProvider();

  const signInWithTwitter = () => {
    signInWithRedirect(auth, provider)
  .then((result) => {
    // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
    // You can use these server side with your app's credentials to access the Twitter API.
    const credential = TwitterAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const secret = credential.secret;

    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = TwitterAuthProvider.credentialFromError(error);
    // ...
  });
  }

  return (
    <div className="App">
      <header></header>

      <button onClick={signInWithTwitter}>Sign In</button>

      {PostInfo.map((info) => {
        return ( 
          <Post
            username={info.username}
            avatar={info.avatar}
            shop={info.shop}
            main={info.main}
            snack={info.snack}
            drink={info.drink}
          />
        );
      })}
    </div>
  );
}

export default App;
