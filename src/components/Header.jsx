import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <ul>
        <li>BLOG</li>
        <li className="push-right">
          {" "}
          <Link className="links" to="/">
            Home
          </Link>{" "}
        </li>
        <li>
          {" "}
          <Link className="links" to="/about">
            About{" "}
          </Link>
        </li>
        <li>
          {" "}
          <Link className="links" to="/contact">
            Contact
          </Link>{" "}
        </li>
        <li className="border">
          {" "}
          <Link className="links" to="/login">
            {" "}
            Login <i className="fa-solid fa-user"></i>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
