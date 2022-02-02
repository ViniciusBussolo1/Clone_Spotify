import LogoSpotify from "../../assets/images/spotify-logo.svg";
import {
  FaHome,
  FaSearch,
  FaFolder,
  FaPlusCircle,
  FaHeart,
  FaRegArrowAltCircleDown,
} from "react-icons/fa";

import "./styles.scss";

export function MenuLateral() {
  return (
    <div id="menu_lateral">
      <div className="logo_spotify">
        <img src={LogoSpotify} alt="Spotify" />
      </div>

      {/*MENU ITENS */}
      <a className="itens_menu">
        <div className="iten">
          <FaHome className="icon" />
          <span>Início</span>
        </div>
      </a>

      <a className="itens_menu">
        <div className="iten">
          <FaSearch className="icon_search" />
          <span>Buscar</span>
        </div>
      </a>

      <a className="itens_menu">
        <div className="iten">
          <FaFolder className="icon_library" />
          <span>Sua Biblioteca</span>
        </div>
      </a>

      {/*MENU ITENS MUSIC*/}
      <div className="menu_music">
        <a className="iten_music">
          <div className="iten">
            <FaPlusCircle className="icon" />
            <span>Criar Playlist</span>
          </div>
        </a>

        <a className="iten_music">
          <div className="iten">
            <FaHeart className="icon" />
            <span>Músicas Curtidas</span>
          </div>
        </a>
      </div>

      {/*MENU INSTALL*/}
      <div className="menu_install">
        <a className="iten_install">
          <div className="iten">
            <FaRegArrowAltCircleDown className="icon" />
            <span>Instalar Aplicativo</span>
          </div>
        </a>
      </div>
    </div>
  );
}
