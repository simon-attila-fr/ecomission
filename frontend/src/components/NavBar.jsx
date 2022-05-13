import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
// eslint-disable-next-line import/no-unresolved
import "@components/styles/Header.css";

function NavBar(props) {
  const { home, infos } = props;
  return (
    <nav className="navBar">
      <img className="logo" src="src/assets/logo4.png" alt="logo" />
      <div className="link">
        <Link to="/">{home}</Link>
        <Link to="/Infos">{infos}</Link>
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
