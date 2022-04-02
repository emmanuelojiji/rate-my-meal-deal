import './Feed.scss'
import { PostInfo } from "../PostInfo";
import Post from '../Components/Post';
import NavBar from '../Components/NavBar';

const Feed = () => {
  return (
    <>
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

      <NavBar/>
    </>
  );
};

export default Feed;
