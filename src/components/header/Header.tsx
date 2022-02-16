import {
  FaChevronLeft,
  FaChevronRight,
  FaJenkins,
  FaAngleDown,
} from "react-icons/fa";

import "./styles.scss";

export function Header() {
  return (
    <header id="cabecalho">
      <div className="arrow_left">
        <FaChevronLeft />
      </div>
      <div className="arrow_right">
        <FaChevronRight />
      </div>

      <div className="button">
        <button className="button_upgrade">FAÇA UPGRADE</button>
      </div>
      <button className="button_perfil">
        <div>
          <FaJenkins className="icon" />
        </div>
        <span>vinicusbussolo</span>
        <FaAngleDown />
      </button>
    </header>
  );
}
