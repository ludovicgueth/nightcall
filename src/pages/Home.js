import React, { Component } from "react";
import { NavLink } from "react-router-dom";

const handleClick = text => {
  document.getElementById("messaging-me-hidden").classList.remove("is-hidden");
  document.getElementById("card-footer").classList.add("is-hidden");

  setTimeout(() => {
    const elem = document.getElementById("message");
    elem.textContent = text;
    setTimeout(() => {
      document.getElementById("hidden-loading").classList.remove("is-hidden");
      setTimeout(() => {
        document.getElementById("hidden-loading").classList.add("is-hidden");
        document
          .getElementById("hidden-messaging")
          .classList.remove("is-hidden");
      }, 2000);
    }, 1000);
  }, 1000);
};

const getHours = () => {
  const now = new Date();
  return now.getUTCHours() + "h" + now.getUTCMinutes();
};

const getDay = () => {
  const now = new Date();
  return now.getUTCDate();
};
const Game = () => {
  return (
    <div className="card">
      <header className="card-header">
        <p className="card-header-title">
          <img
            src="https://avatars0.githubusercontent.com/u/15957641?s=400&v=4"
            width="50"
            height="50"
            className="gameProfile"
          />
          Guillaume Tran
        </p>
        {/* <a href="#" className="card-header-icon" aria-label="more options">
          <span className="icon">
            <i className="fa fa-angle-down" aria-hidden="true" />
          </span>
        </a> */}
      </header>
      <div className="card-content game">
        <div className="messaging-info">
          <small>{getDay()} Décembre</small>
        </div>
        <div className="messaging">
          <img
            src="https://avatars0.githubusercontent.com/u/15957641?s=400&v=4"
            width="50"
            height="50"
            className="gameProfile"
          />
          <div className="box">
            <div className="content">
              Bonjour, bienvenue sur Night Call. Nous vous proposons de
              découvrir la prévention routière autour de plusieurs histoires.
              <br />
              <small>{getHours()}</small>
            </div>
          </div>
        </div>
        <div className="messaging-me is-hidden" id="messaging-me-hidden">
          <div className="box">
            <div className="content" id="message">
              <i className="fa fa-spinner fa-pulse fa-fw" />
            </div>
          </div>
        </div>
        <div className="messaging is-hidden" id="hidden-loading">
          <img
            src="https://avatars0.githubusercontent.com/u/15957641?s=400&v=4"
            width="50"
            height="50"
            className="gameProfile"
          />
          <div className="box">
            <div className="content">
              <i className="fa fa-spinner fa-pulse fa-fw" />
            </div>
          </div>
        </div>
        <div className="messaging is-hidden" id="hidden-messaging">
          <img
            src="https://avatars0.githubusercontent.com/u/15957641?s=400&v=4"
            width="50"
            height="50"
            className="gameProfile"
          />
          <div className="box">
            <div className="content">
              Super, je vous invite à essayer l'application{" "}
              <a href="https://expo.io/@guillaumetran/nuitinfo2017">
                avec Expo
              </a>.
              <br />
              <small>{getHours()}</small>
            </div>
          </div>
        </div>
      </div>
      <footer className="card-footer" id="card-footer">
        <a
          className="card-footer-item"
          onClick={() => {
            handleClick("Ca m'intéresse !");
          }}
        >
          Ca m'intéresse !
        </a>
        <a
          className="card-footer-item"
          onClick={() => {
            handleClick("J'aimerai essayer");
          }}
        >
          J'aimerai essayer
        </a>
      </footer>
    </div>
  );
};

const Actu = () => {
  return (
    <div>
      <h2 className="title is-2">Derniers articles</h2>
      <hr />
      <div className="content">
        <ul>
          <li>Téléphone au volant</li>
          <li>Gilet de sécurité</li>
          <li>Choisir son sam</li>
        </ul>
      </div>
      <hr />
      <NavLink to="/stats">Voir tous les articles</NavLink>
    </div>
  );
};

export default class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <section className="section">
          <div className="columns">
            <div className="column is-offset-1 is-7">
              <Game />
            </div>
            <div className="column is-3">
              <Actu />
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container has-text-centered">
            <a
              href="https://expo.io/@guillaumetran/nuitinfo2017"
              className="button is-primary"
            >
              Essayer l'application avec Expo en utilisant le QR Code.
            </a>
          </div>
        </section>
        <section className="section" style={{ backgroundColor: "#276cda" }}>
          <div className="columns">
            <div className="column is-3 is-offset-1">
              <img
                src="https://www.metoffice.gov.uk/binaries/content/gallery/mohippo/images/services/mobile-and-digital-services/badge-app-store.png"
                alt=""
              />
            </div>
            <div
              className="column is-4"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <h1
                className="title is-1"
                style={{
                  color: "white",
                  textAlign: "center"
                }}
              >
                Bientôt disponible sur votre mobile !
              </h1>
            </div>
            <div className="column is-3">
              <img
                src="https://storage.googleapis.com/support-kms-prod/D90D94331E54D2005CC8CEE352FF98ECF639"
                alt=""
              />
            </div>
          </div>
        </section>
      </div>
    );
  }
}
