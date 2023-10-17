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
        <li>catagory</li>
        <li>Men</li>
        <li>Women</li>
    </ul>
    <div className="cart-icon">
        <button>Login</button>
        <img src={cart} alt="cart icon" />
        <div className="nav-cart-count">
            0
        </div>
    </div>
</div>    



);
}

export default Navbar