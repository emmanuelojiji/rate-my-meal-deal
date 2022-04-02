import "./Feed.scss";
import { PostInfo } from "../PostInfo";
import Post from "../Components/Post";
import NavBar from "../Components/NavBar";

const Feed = () => {
  return (
    <div className="Feed">
      <header></header>

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

      <NavBar />
    </div>
  );
};

export default Feed;
