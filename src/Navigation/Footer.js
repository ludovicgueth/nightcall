import React, { Component } from "react";
import styled from "styled-components";
import Logo from "../logo.png";
const entrepriseLinks = [
  {
    name: "A propos",
    url: "about"
  },
  {
    name: "Blog",
    url: "blog"
  },
  {
    name: "Presse",
    url: "press"
  },
  {
    name: "Jobs",
    url: "jobs"
  }
];

const resourceLinks = [
  {
    name: "Support",
    url: "support"
  },
  {
    name: "Contact",
    url: "contact"
  },
  {
    name: "Confidentialité",
    url: "conf"
  }
];

const pages = [
  {
    name: "Home",
    url: "/"
  },
  {
    name: "Game",
    url: "/game"
  },
  {
    name: "Contact",
    url: "/contact"
  }
];

const Menus = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 48px;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

const MenusItem = styled.div`
  padding-top: 24px;
`;

const FooterMenuLink = ({ url, name }, key) => {
  return (
    <li key={key}>
      <a href={url}>{name}</a>
    </li>
  );
};

export default class Footer extends Component {
  state = {};
  render() {
    return (
      <footer className="footer" style={{ paddingBottom: "3rem" }}>
        <div className="container">
          <div className="content has-text-centered">
            <img src={Logo} alt="footer_logo" style={{ height: "200px" }} />
          </div>
        </div>
      </footer>
    );
  }
}
