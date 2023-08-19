import { Link } from 'react-router-dom'
import Logo from '../assets/logopng.png'
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
            <Link to="/login">Login</Link>
          </div>
          <div className="signup">
          <Link to="/signup">Sign Ufa-pulse</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
