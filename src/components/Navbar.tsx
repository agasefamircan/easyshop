import { Link } from "react-router-dom";
import Logo from "../assets/logopng.png";
import "semantic-ui-css/semantic.min.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="details">
        <div className="cart"></div>
        <div className="account">
          <div className="login">
            <Link to="/login">
              <button className="ui primary button">Login</button>
            </Link>
          </div>
          <div className="signup">
            <Link to="/signup">
              <button className="ui button">Sign Up</button>{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
