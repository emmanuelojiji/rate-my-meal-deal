import './Post.scss'
import { PostInfo } from '../PostInfo';

const Post = ({username, shop}) => {
    return(
        <div className='post-container'>
            <span>{username}</span>
            <span>{shop}</span>
        </div>
    )
}

export default Post;