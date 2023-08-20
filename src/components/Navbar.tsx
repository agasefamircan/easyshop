import { Link } from "react-router-dom";
import Logo from "../assets/images/logopng.svg";
import "semantic-ui-css/semantic.min.css";
import styles from "../assets/Navbar/navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <img className={styles.img} src={Logo} alt="logo" />
      </div>
      <div className={styles.navItems}>
        <Link className={styles.item} to="/">
          Home
        </Link>
        <Link className={styles.item} to="/about">
          About
        </Link>
        <Link className={styles.item} to="/contact">
          Contact
        </Link>
      </div>
      <div className={styles.details}>
        <div className="cart">
          <i className="shopping large olive basket icon"></i>
        </div>
        <div className={styles.account}>
          <div className="login">
            <Link to="/login">
              <button className="ui green button">Login</button>
            </Link>
          </div>
          <div className="signup">
            <Link to="/signup">
              <button className="ui teal button">Sign Up</button>{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
