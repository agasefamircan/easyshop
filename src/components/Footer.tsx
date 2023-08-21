import { Link } from "react-router-dom";
import styles from "../assets/css/footer.module.css";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        Developed by:{" "}
        <Link target="_blank" to="https://linkedin.com/in/agasefamircan"><span>Agasaf Amircan</span></Link>
      </p>
    </footer>
  );
};

export default Footer;
