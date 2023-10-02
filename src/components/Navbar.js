import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import css from "./Navbar.module.css";
import count from "../App";

export default function Navbar(props) {
  return (
    <nav className={` ${css.navbg} navbar navbar-expand-lg`}>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo03"
        aria-controls="navbarTogglerDemo03"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <Link
        className={`${css.linktext} navbar-brand`}
        to="/"
        style={{ marginLeft: "2vh", padding: "1vh" }}
      >
        {props.Title}
      </Link>

      <div
        className={`collapse navbar-collapse ${css.navbaralign}`}
        id="navbarTogglerDemo03"
      >
        <ul className="navbar-nav mr-auto mt-4 mt-lg-0">
          <li className={`nav-item active`}>
            <Link className={`${css.navlink} nav-link`} to="/">
              {props.Link1} <span className="sr-only"></span>
            </Link>
          </li>
          <li className={`nav-item `}>
            <Link className={`${css.navlink} nav-link`} to="/feast">
              {props.Link2} <span className="sr-only"></span>
            </Link>
          </li>
          <li className={`nav-item `}>
            <Link className={`${css.navlink} nav-link`} to="/arrive">
              {props.Link3} <span className="sr-only"></span>
            </Link>
          </li>
          <li className={`nav-item `}>
            <Link className={`${css.navlink} nav-link`} to="/delivered">
              {props.Link4} <span className="sr-only"></span>
            </Link>
          </li>
          <li className={`nav-item `} to="/cart">
            <Link
              className={`${css.navlink} nav-link`}
              style={{
                backgroundColor: "rgb(255, 204, 0)",
                color: "black",
                borderRadius: "5px",
              }}
              to="/cart"
            >
              
              <button type="button" className={`${css.btnn}`}>
              {props.buttonText} <span className={`${css.spann} "badge badge-light"`}>4</span>
              </button>
            </Link>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          {/* <button  style={{backgroundColor:"rgb(255, 204, 0)",color:"black"}} className="btn  my-2 my-sm-0" type="submit">{props.buttonText} {count}</button> */}
        </form>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  Title: PropTypes.string.isRequired,
  Link1: PropTypes.string.isRequired,
  Link2: PropTypes.string,
  Link3: PropTypes.string,
  Link4: PropTypes.string,
};

Navbar.defaultProps = {
  Title: "FoodDeliveryApp",
  Link1: "Home",
  Link2: "Feast",

  Link3: "Arriving",
  Link4: "Delivered",

  buttonText: "Cart",
};
