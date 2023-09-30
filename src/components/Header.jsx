import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <div>
      <ul>
        <li className="links">
          <Link className="links" to="/">
            BLOG
          </Link>
        </li>
        <li className="push-right">
          <Link className="links" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="links" to="/create-blog">
            Create Blog
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
