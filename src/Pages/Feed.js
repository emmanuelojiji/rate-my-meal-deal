import "./Feed.scss";
import Post from "../Components/Post";
import NavBar from "../Components/NavBar";
import NewPost from "../Components/NewPost";
import { Link } from "react-router-dom";
import { collection, query, where, getDocs, addDoc } from "firebase/firestore";
import { db } from "../firebase-config";
import { useEffect } from "react";
import { useState } from "react";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Feed = () => {
  const auth = getAuth();
  const navigate = useNavigate();

  const [posts, setPosts] = useState([]);

  const [newPostVisible, setNewPostVisible] = useState(false);

  const getPosts = async () => {
    const querySnapshot = await getDocs(collection(db, "posts"));
    const postsFromFirestore = [];
    querySnapshot.forEach((doc) => {
      postsFromFirestore.push(doc.data());
    });

    setPosts(postsFromFirestore);
  };

  useEffect(() => {
    getPosts();
  });

  return (
    <>
      {newPostVisible && (
        <NewPost
          close={() => setNewPostVisible(false)}
          createPost={() => setNewPostVisible(false)}
        />
      )}
      <button
        class="new-post-button"
        onClick={() => {
          if (auth.currentUser) {
            setNewPostVisible(true);
          } else {
            navigate("/access");
          }
        }}
      >
        New Post
      </button>
      <div className="Feed">
        <header>
          <h1>Timeline</h1>
        </header>

        <div className="posts-wrap">
          {posts.map((post) => (
            <Post
              username={post.username}
              image={post.image}
              shop={post.shop}
              main={post.main}
              snack={post.snack}
              drink={post.drink}
            />
          ))}
        </div>
        <NavBar />
      </div>
    </>
  );
};

export default Feed;
