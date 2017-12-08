import React, { Component } from "react";

import { NavLink } from "react-router-dom";

export default class PageNotFound extends Component {
  state = {};

  render() {
    return (
      <section className="hero is-danger is-large">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">ERREUR 404</h1>
            <h2 className="subtitle">
              La page que vous recherchez n'existe pas.
              <br />
              <NavLink to="/" className="button is-inverted is-danger">
                Retournez à l'accueil
              </NavLink>
            </h2>
          </div>
        </div>
      </section>
    );
  }
}
