import "./Navbar.css"

import logo from "../assets/logo.png";
import cart from "../assets/cart_icon.png"
const Navbar = () => {
  return (

<div className="navbar">
    <div className="navlogo">
    <img src={logo} alt="logo" />
    <p>SHOPPING.AR</p>
    </div>
    <ul className="nevbarmenu">
        <li>home</li>
        <li>home</li>
        <li>home</li>
        <li>home</li>
    </ul>
    <div className="cart-icon">
        <button>Login</button>
        <img src={cart} alt="cart icon" />
    </div>
</div>    



);
}

export default Navbar