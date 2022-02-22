import CardSpotify from "../../assets/images/card_spotify.jpg";
import LogoPodPah from "../../assets/images/logo_podpah.jpg";
import LogoTop50 from "../../assets/images/logo_top50_spotify.jpg";
import LogoSidoka from "../../assets/images/logo_sidoka_spotify.jpg";

import { FaCaretRight } from "react-icons/fa";

import "./styles.scss";

export function Main() {
  return (
    <div id="main">
      <main className="main_page">
        <h1 className="title">Boa tarde</h1>
        {/*CARDS*/}
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
        {/*EPISODIOS PARA VOCE*/}
        <div className="title_cards">
          <h2>Episódios para você</h2>
          <span>VER TUDO</span>
        </div>
        <div className="cards_episodios">
          <div className="card_episodio">
            <img className="logo_episodio" src={LogoPodPah} alt="Logo PodPah" />
            <div className="titles">
              <p className="title">JOAO GOMES,...</p>
              <p className="subtitle">16 DE FEV.-160MIN</p>
            </div>
          </div>
          <div className="card_episodio">
            <img className="logo_episodio" src={LogoPodPah} alt="Logo PodPah" />
            <div className="titles">
              <p className="title">JOAO GOMES,...</p>
              <p className="subtitle">16 DE FEV.-160MIN</p>
            </div>
          </div>
          <div className="card_episodio">
            <img className="logo_episodio" src={LogoPodPah} alt="Logo PodPah" />
            <div className="titles">
              <p className="title">JOAO GOMES,...</p>
              <p className="subtitle">16 DE FEV.-160MIN</p>
            </div>
          </div>
          <div className="card_episodio">
            <img className="logo_episodio" src={LogoPodPah} alt="Logo PodPah" />
            <div className="titles">
              <p className="title">JOAO GOMES,...</p>
              <p className="subtitle">16 DE FEV.-160MIN</p>
            </div>
          </div>
          <div className="card_episodio">
            <img className="logo_episodio" src={LogoPodPah} alt="Logo PodPah" />
            <div className="titles">
              <p className="title">JOAO GOMES,...</p>
              <p className="subtitle">16 DE FEV.-160MIN</p>
            </div>
          </div>
          <div className="card_episodio">
            <img className="logo_episodio" src={LogoPodPah} alt="Logo PodPah" />
            <div className="titles">
              <p className="title">JOAO GOMES,...</p>
              <p className="subtitle">16 DE FEV.-160MIN</p>
            </div>
          </div>
          <div className="card_episodio">
            <img className="logo_episodio" src={LogoPodPah} alt="Logo PodPah" />
            <div className="titles">
              <p className="title">JOAO GOMES,...</p>
              <p className="subtitle">16 DE FEV.-160MIN</p>
            </div>
          </div>
          <div className="card_episodio">
            <img className="logo_episodio" src={LogoPodPah} alt="Logo PodPah" />
            <div className="titles">
              <p className="title">JOAO GOMES,...</p>
              <p className="subtitle">16 DE FEV.-160MIN</p>
            </div>
          </div>
        </div>

        {/*TOCADAS RECENTEMENTE*/}
        <div className="title_cards">
          <h2>Tocado recentemente</h2>
          <span>VER TUDO</span>
        </div>
        <div className="cards_episodios">
          <div className="card_episodio">
            <img className="logo_episodio" src={LogoTop50} alt="Logo PodPah" />
            <div className="titles">
              <p className="title">JOAO GOMES,...</p>
              <p className="subtitle">16 DE FEV.-160MIN</p>
            </div>
          </div>
          <div className="card_episodio">
            <img className="logo_episodio" src={LogoTop50} alt="Logo PodPah" />
            <div className="titles">
              <p className="title">JOAO GOMES,...</p>
              <p className="subtitle">16 DE FEV.-160MIN</p>
            </div>
          </div>
          <div className="card_episodio">
            <img className="logo_episodio" src={LogoTop50} alt="Logo PodPah" />
            <div className="titles">
              <p className="title">JOAO GOMES,...</p>
              <p className="subtitle">16 DE FEV.-160MIN</p>
            </div>
          </div>
          <div className="card_episodio">
            <img className="logo_episodio" src={LogoTop50} alt="Logo PodPah" />
            <div className="titles">
              <p className="title">JOAO GOMES,...</p>
              <p className="subtitle">16 DE FEV.-160MIN</p>
            </div>
          </div>
          <div className="card_episodio">
            <img className="logo_episodio" src={LogoTop50} alt="Logo PodPah" />
            <div className="titles">
              <p className="title">JOAO GOMES,...</p>
              <p className="subtitle">16 DE FEV.-160MIN</p>
            </div>
          </div>
          <div className="card_episodio">
            <img className="logo_episodio" src={LogoTop50} alt="Logo PodPah" />
            <div className="titles">
              <p className="title">JOAO GOMES,...</p>
              <p className="subtitle">16 DE FEV.-160MIN</p>
            </div>
          </div>
          <div className="card_episodio">
            <img className="logo_episodio" src={LogoTop50} alt="Logo PodPah" />
            <div className="titles">
              <p className="title">JOAO GOMES,...</p>
              <p className="subtitle">16 DE FEV.-160MIN</p>
            </div>
          </div>
          <div className="card_episodio">
            <img className="logo_episodio" src={LogoTop50} alt="Logo PodPah" />
            <div className="titles">
              <p className="title">JOAO GOMES,...</p>
              <p className="subtitle">16 DE FEV.-160MIN</p>
            </div>
          </div>
        </div>

        {/*MAIORES HITS DO MOMENTO*/}
        <div className="title_cards">
          <h2 className="title_hits_momento">Os maiores hits do momento</h2>
          <span>VER TUDO</span>
        </div>
        <div className="cards_episodios">
          <div className="card_episodio">
            <img className="logo_episodio" src={LogoSidoka} alt="Logo PodPah" />
            <div className="titles">
              <p className="title">JOAO GOMES,...</p>
              <p className="subtitle">16 DE FEV.-160MIN</p>
            </div>
          </div>
          <div className="card_episodio">
            <img className="logo_episodio" src={LogoSidoka} alt="Logo PodPah" />
            <div className="titles">
              <p className="title">JOAO GOMES,...</p>
              <p className="subtitle">16 DE FEV.-160MIN</p>
            </div>
          </div>
          <div className="card_episodio">
            <img className="logo_episodio" src={LogoSidoka} alt="Logo PodPah" />
            <div className="titles">
              <p className="title">JOAO GOMES,...</p>
              <p className="subtitle">16 DE FEV.-160MIN</p>
            </div>
          </div>
          <div className="card_episodio">
            <img className="logo_episodio" src={LogoSidoka} alt="Logo PodPah" />
            <div className="titles">
              <p className="title">JOAO GOMES,...</p>
              <p className="subtitle">16 DE FEV.-160MIN</p>
            </div>
          </div>
          <div className="card_episodio">
            <img className="logo_episodio" src={LogoSidoka} alt="Logo PodPah" />
            <div className="titles">
              <p className="title">JOAO GOMES,...</p>
              <p className="subtitle">16 DE FEV.-160MIN</p>
            </div>
          </div>
          <div className="card_episodio">
            <img className="logo_episodio" src={LogoSidoka} alt="Logo PodPah" />
            <div className="titles">
              <p className="title">JOAO GOMES,...</p>
              <p className="subtitle">16 DE FEV.-160MIN</p>
            </div>
          </div>
          <div className="card_episodio">
            <img className="logo_episodio" src={LogoSidoka} alt="Logo PodPah" />
            <div className="titles">
              <p className="title">JOAO GOMES,...</p>
              <p className="subtitle">16 DE FEV.-160MIN</p>
            </div>
          </div>
          <div className="card_episodio">
            <img className="logo_episodio" src={LogoSidoka} alt="Logo PodPah" />
            <div className="titles">
              <p className="title">JOAO GOMES,...</p>
              <p className="subtitle">16 DE FEV.-160MIN</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
