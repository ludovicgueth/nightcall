import React, { Component } from "react";
import styled from "styled-components";
import Logo from "../logo.png";
import { NavLink } from "react-router-dom";

const pages = [
  {
    name: "NIGHT CALL",
    url: "/"
  }
];

const NavigationLink = ({ page, styleClass }) => {
  return (
    <NavLink
      to={page.url}
      className={styleClass}
      activeClassName="is-active"
      exact
    >
      {page.name}
    </NavLink>
  );
};

const NavBar = styled.nav`
  height: 10h;
  background-color: #f8f8f8;
`;

export default class Navigation extends Component {
  _toggleMenu() {
    const menuIcon = document.getElementById("menuIcon");
    const menu = document.getElementById("menu");
    if (menuIcon.classList.contains("is-active")) {
      menuIcon.classList.remove("is-active");
      menu.classList.remove("is-active");
    } else {
      menuIcon.classList.add("is-active");
      menu.classList.add("is-active");
    }
  }

  render() {
    return (
      <NavBar className="navbar">
        <div className="navbar-brand">
          <a href="/" className="navbar-item">
            <img src={Logo} alt="" />
          </a>
          <div
            className="navbar-burger"
            id="menuIcon"
            onClick={this._toggleMenu}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
        <div className="navbar-menu" id="menu" onClick={this._toggleMenu}>
          <NavLink
            to="/"
            className="navbar-item"
            activeClassName="is-active"
            exact
          >
            <b>NIGHT CALL</b>
          </NavLink>
          <div className="navbar-end">
            <NavLink
              to="/stats"
              className="navbar-item"
              activeClassName="is-active"
              exact
            >
              <i className="fa fa-file-text-o" aria-hidden="true" />
            </NavLink>
          </div>
        </div>
      </NavBar>
    );
  }
}
