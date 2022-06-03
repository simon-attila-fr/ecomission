import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
// eslint-disable-next-line import/no-unresolved
import "@components/styles/Header.css";
import "../assets/logo4.png";

function NavBar(props) {
  const { home, infos } = props;
  return (
    <nav className="navBar">
      <img className="logo" src="src/assets/logo4.png" alt="logo" />
      <div className="link">
        <NavLink className="navlink" to="/">
          {home}
        </NavLink>
        <NavLink className="navlink" to="/Infos">
          {infos}
        </NavLink>
      </div>
    </nav>
  );
}

NavBar.propTypes = {
  home: PropTypes.string,
  infos: PropTypes.string,
};

NavBar.defaultProps = {
  home: "acceuil",
  infos: "infos",
};

export default NavBar;
