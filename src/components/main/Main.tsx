import CardSpotify from "../../assets/images/card_spotify.jpg";

import { FaCaretRight } from "react-icons/fa";

import "./styles.scss";

export function Main() {
  return (
    <div id="main">
      <main className="main_page">
        <h1 className="title">Boa tarde</h1>
        <div className="cards">
          <div className="card">
            <img src={CardSpotify} alt="Card Spotify" />
            <span>Hits da Internet</span>
            <div className="play">
              <FaCaretRight className="icon" />
            </div>
          </div>
          <div className="card">
            <img src={CardSpotify} alt="Card Spotify" />
            <span>Hits da Internet</span>
            <div className="play">
              <FaCaretRight className="icon" />
            </div>
          </div>
          <div className="card">
            <img src={CardSpotify} alt="Card Spotify" />
            <span>Hits da Internet</span>
            <div className="play">
              <FaCaretRight className="icon" />
            </div>
          </div>
          <div className="card">
            <img src={CardSpotify} alt="Card Spotify" />
            <span>Hits da Internet</span>
            <div className="play">
              <FaCaretRight className="icon" />
            </div>
          </div>
          <div className="card">
            <img src={CardSpotify} alt="Card Spotify" />
            <span>Hits da Internet</span>
            <div className="play">
              <FaCaretRight className="icon" />
            </div>
          </div>
          <div className="card">
            <img src={CardSpotify} alt="Card Spotify" />
            <span>Hits da Internet</span>
            <div className="play">
              <FaCaretRight className="icon" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
