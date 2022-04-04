import "./NewPost.scss";

const NewPost = ({close}) => {
  return (
    <div className="NewPost">
        <button onClick={close}>Close</button>
      <h1>New Post</h1>
    </div>
  );
};

export default NewPost;
