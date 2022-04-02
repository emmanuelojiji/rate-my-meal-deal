import "./NavBar.scss";
import { Link } from "react-router-dom";

const NavBar = () => {
    return(
        <>
        <div className="nav-bar">
            <Link to='/home'>Home</Link>
            <Link to='/'>Feed</Link>
            <Link to='/Profile'>Profile</Link>
        </div>
        </>
    )
}

export default NavBar;