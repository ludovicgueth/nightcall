import React, { Component } from "react";

export default class Stats extends Component {
  state = {};
  render() {
    return (
      <div>
        <section className="section">
          <h2 className="title is-2 has-text-centered">
            SECURITE ROUTIERE<br />TOUS RESPONSABLE
          </h2>
        </section>
        <section className="section">
          <div className="columns">
            <div className="column is-4">
              <div class="card">
                <div class="card-image">
                  <figure class="image is-4by3">
                    <img
                      src="http://www.rouletitine.fr/wp-content/uploads/2014/05/Sam-celui-qui-ne-boit-pas.jpg"
                      alt="Placeholder image"
                    />
                  </figure>
                </div>
                <div class="card-content">
                  <div class="media">
                    <div class="media-content">
                      <p class="title is-4">Choisir son sam</p>
                      <p class="subtitle is-6">
                        @guillaumetran - <small>8/12/2017</small>
                      </p>
                    </div>
                  </div>
                  <div class="content">
                    Quand on sort, c'est grace à Sam qu'on rentre.
                  </div>
                </div>
              </div>
            </div>

            <div className="column is-4">
              <div class="card">
                <div class="card-image">
                  <figure class="image is-4by3">
                    <img
                      src="http://www.influencia.net/data/classes/actualite/actu_4405_image.jpg"
                      alt="Placeholder image"
                    />
                  </figure>
                </div>
                <div class="card-content">
                  <div class="media">
                    <div class="media-content">
                      <p class="title is-4">Gilet de sécurité</p>
                      <p class="subtitle is-6">
                        @yannprobst - <small>8/12/2017</small>
                      </p>
                    </div>
                  </div>

                  <div class="content">
                    C'est jaune, c'est moche, ca ne va avec rien, mais ça peut
                    vous sauver la vie.
                  </div>
                </div>
              </div>
            </div>

            <div className="column is-4">
              <div class="card">
                <div class="card-image">
                  <figure class="image is-4by3">
                    <img
                      src="https://www.iphonote.com/wp-content/uploads/2016/08/nouvelle-video-de-la-securite-routiere-la-derniere-classe-toustouches.jpg"
                      alt="Placeholder image"
                    />
                  </figure>
                </div>
                <div class="card-content">
                  <div class="media">
                    <div class="media-content">
                      <p class="title is-4">Téléphone au volant</p>
                      <p class="subtitle is-6">
                        @ludovicgueth - <small>8/12/2017</small>
                      </p>
                    </div>
                  </div>

                  <div class="content">
                    Quand vous regardez votre téléphone, qui regarde la route ?
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
