import React, { useState } from 'react';
import './navbar.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import { NavLink } from 'react-router-dom';


// BEM -> block element modifier
//prettier-ignore
// const Menu = () => (
//   <ul className="dt8__navbar-menu_container scale-up-center">
//     <li className="nav-item"> <a className="nav-link" href="#home">Home</a></li>
//     <li className="nav-item"><a className="nav-link" href="#home">About</a></li>
//     <li className="nav-item"><a className="nav-link" href="#home">Product</a></li>
//     <li className="nav-item"><a className="nav-link" href="#home">Blog</a></li>
//     <li className="nav-item"><a className="nav-link" href="#home">Team</a></li>
//   </ul>
// )

//prettier-ignore
const Menu = () => (
  <>
    <NavLink to="/home"><button className="btn" href="#home">Home</button></NavLink>
    <NavLink to="/about"><button className="btn" href="#home">About</button></NavLink>
    <NavLink to="/team"><button className="btn" href="#home">Team</button></NavLink>
    <NavLink to="/science"><button className="btn" href="#home">Blog</button></NavLink>
    <NavLink to="/contact"><button className="btn" href="#home">Contact</button></NavLink>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className='navbar navbar-expand-lg dt8__navbar'>
      <div className='container-fluid'>
          <div className="dt8__navbar-links">
      {/* Navbar */}
      <div className="dt8__navbar-links_logo">
         <span className='icon'></span>
        </div>
        <div className="dt8__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="dt8__navbar-menu">
        {toggleMenu
        ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)}/>
        : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)}/>}
        {toggleMenu && (
          <div className="me-auto dt8__navbar-menu_container scale-up-center">
            <Menu/>
          </div>
        )}

      </div>

      </div>

    </nav>
  );
};

export default Navbar;
