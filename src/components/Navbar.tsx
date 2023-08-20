import { Link } from "react-router-dom";
import Logo from "../assets/images/logopng.svg";
import "semantic-ui-css/semantic.min.css";
import styles from '../assets/Navbar/navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <img className={styles.img} src={Logo} alt="logo" />
      </div>
      <div className={styles.details}>
        <div className="cart">
          <i className="shopping basket icon"></i>
        </div>
        <div className={styles.account}>
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
