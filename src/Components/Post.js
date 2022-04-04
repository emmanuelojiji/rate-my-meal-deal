import "./Post.scss";
import { PostInfo } from "../PostInfo";
import { useState, useEffect } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase-config";


const Post = ({ username, shop, main, snack, drink, avatar, image }) => {


  return (
    <div className="post-container">
      <div className="post-header">
        <div className="avatar" style={{ backgroundImage: `url(${avatar})` }}>
          {" "}
        </div>
        <span className="username">{username}</span>
      </div>

      <span className="shop">{shop}</span>
      <span>{main}</span>
      <span>{snack}</span>
      <span>{drink}</span>

      <img
        className="post-image"
        src={image}
      ></img>

      <div className="reaction">
        <span>Like (30)</span>
        <span>Hate (57)</span>
        <span>Comments (33)</span>
      </div>
    </div>
  );
};

export default Post;
