import { useState } from "react";
import "./Navbar.css";
// import Logo from "../images/logo.png";
import { links } from "../data";
import { Link, NavLink } from "react-router-dom";
import { GoThreeBars } from "react-icons/go";
import { MdOutlineClose } from "react-icons/md";

const Navbar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false);
  /* solution 1*/
  // const handleNavShowing = () => {
  //   setIsNavShowing(!isNavShowing);
  // };

  return (
    <nav>
      <div className="container nav_container">
        <Link to="/" className="logo" onClick={() => setIsNavShowing(false)}>
          {/* <img src={Logo} alt="Nav Logo" /> */}
          <h3 className="lloyd">
            Lloyd's<span className="gym">Gym</span>
          </h3>
        </Link>
        <ul className={`nav_links ${isNavShowing ? "show_nav" : "hide_nav"}`}>
          {links.map(({ name, path }, index) => {
            return (
              <li key={index}>
                <NavLink
                  to={path}
                  className={({ isActive }) => (isActive ? "active-nav" : "")}
                  onClick={() => setIsNavShowing((prev) => !prev)}
                >
                  {name}
                </NavLink>
              </li>
            );
          })}
        </ul>
        {/* solution 1 */}
        {/* <button className="nav_toggle-btn" onClick={handleNavShowing}>
          <GoThreeBars />
        </button> */}
        <button
          className="nav_toggle-btn"
          onClick={() => setIsNavShowing((prev) => !prev)}
          // onClick={() => setIsNavShowing(!isNavShowing)}
        >
          {isNavShowing ? <MdOutlineClose /> : <GoThreeBars />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
