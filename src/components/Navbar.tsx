import { useState } from "react";
import { Link } from "react-router-dom";

import Logo from "../assets/images/logopng.svg";
import "semantic-ui-css/semantic.min.css";
import styles from "../assets/css/navbar.module.css";

const Navbar = () => {
  const [open, setOpen] = useState(true);

  const toogleMenu = () => {
    setOpen(!open);
    console.log("salam");
  };
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/">
          {" "}
          <img className={styles.img} src={Logo} alt="logo" />{" "}
        </Link>
      </div>
      <div className={`${styles.navItems} `}>
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
        <div className={styles.cart}>
          <i className="shopping large teal basket icon"></i>
        </div>
        <div className={styles.account}>
          <div className="login">
            <Link to="/login">
              <button className="ui black button">Login</button>
            </Link>
          </div>
          <div className="signup">
            <Link to="/signup">
              <button className="ui teal button">Sign Up</button>{" "}
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.menuIcon} onClick={toogleMenu}>
        {open && <i className={`bars icon  ${styles.toggle_icon}`}></i>}
      </div>
      {!open && (
        <div className={styles.res_nav_menus}>
          <i
            onClick={toogleMenu}
            className={`${styles.times_icon} close icon`}
          ></i>
          <div className={styles.res_nav_menu}>
            <Link to="/">
              <p onClick={toogleMenu}>Home</p>
            </Link>
            <Link to="/about">
              <p onClick={toogleMenu}>About</p>
            </Link>
            <Link to="/contact">
              <p onClick={toogleMenu}>Contact</p>
            </Link>
            <div className="login">
              <Link to="/login">
                <button className="ui black button">Login</button>
              </Link>
            </div>
            <div className="signup">
              <Link to="/signup">
                <button className="ui teal button">Sign Up</button>{" "}
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Navbar;
