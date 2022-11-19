import React, { useState } from 'react';
import './navbar.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';


// BEM -> block element modifier

const Menu = () => (
  <>
  <p><a href="#home">Home</a></p>
  <p><a href="#home">About</a></p>
  <p><a href="#home">Product</a></p>
  <p><a href="#home">Blog</a></p>
  <p><a href="#home">Team</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="dt8__navbar">
      <div className="dt8__navbar-links">
        <div className="dt8__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="dt8__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="dt8__navbar-sign"> {/* Come back to this for smaller screen sizes */}
          <p>Sign In</p>
          <button type="button">Sign up</button>
      </div>
      <div className="dt8__navbar-menu">
        {toggleMenu
        ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)}/>
        : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)}/>}
        {toggleMenu && (
        <div className="dt8__navbar-menu_container scale-up-center">
          <div className="dt8__navbar-menu_container-links">
            <Menu/>
          </div>
          <div className="dt8__navbar-menu_container-links-sign"> {/* Come back to this for smaller screen sizes */}
              <p>Sign In</p>
              <button type="button">Sign up</button>
          </div>
        </div>
        )}

      </div>
    </div>
  )
}

export default Navbar;