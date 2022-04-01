import "./Post.scss";
import { PostInfo } from "../PostInfo";

const Post = ({ username, shop, main, snack, drink, avatar }) => {
  return (
    <div className="post-container">
      <div className="post-header">
        <div className="avatar" style={{ backgroundImage: `url(${avatar})` }}>
          {" "}
        </div>
        <span>{username}</span>
      </div>

      <span>{shop}</span>
      <span>{main}</span>
      <span>{snack}</span>
      <span>{drink}</span>

      <img
        className="post-image"
        src="https://i.inews.co.uk/content/uploads/2018/03/mealdealphoto.png"
      ></img>
    </div>
  );
};

export default Post;
