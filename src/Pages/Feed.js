import "./Feed.scss";
import Post from "../Components/Post";
import NavBar from "../Components/NavBar";
import { Link } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";
import { useEffect } from "react";
import { useState } from "react";

const Feed = () => {
  const [posts, setPosts] = useState([]);

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
    <div className="Feed">
      <header></header>

      {posts.map((post) => (
        <Post
          image={post.image}
          shop={post.shop}
          main={post.main}
          snack={post.snack}
          drink={post.drink}
        />
      ))}
      <NavBar />
    </div>
  );
};

export default Feed;
