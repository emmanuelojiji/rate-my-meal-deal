import "./NewPost.scss";
import { useEffect, useState } from "react";
import { collection, query, where, getDocs, addDoc } from "firebase/firestore";
import { db } from "../firebase-config";
import { getAuth } from "firebase/auth";

const NewPost = ({ close }) => {
  const [newShop, setNewShop] = useState("");
  const [newMain, setNewMain] = useState("");
  const [newSnack, setNewSnack] = useState("");
  const [newDrink, setNewDrink] = useState("");
  
  const auth = getAuth();

  const createPost = async () => {
    const docRef = await addDoc(collection(db, "posts"), {
      shop: newShop,
      main: newMain,
      snack: newSnack,
      drink: newDrink,
      username: auth.currentUser.displayName
    });

    console.log(auth.currentUser)
   
  };

  return (
    <div className="NewPost">
      <button onClick={close}>Close</button>
      <h1>New Post</h1>

      <input
        type="text"
        placeholder="Shop"
        onChange={(e) => setNewShop(e.target.value)}
      ></input>
      <input
        type="text"
        placeholder="Main"
        onChange={(e) => setNewMain(e.target.value)}
      ></input>
      <input
        type="text"
        placeholder="Snack"
        onChange={(e) => setNewSnack(e.target.value)}
      ></input>
      <input
        type="text"
        placeholder="Drink"
        onChange={(e) => setNewDrink(e.target.value)}
      ></input>

      <button onClick={createPost}>Create Post</button>
    </div>
  );
};

export default NewPost;
