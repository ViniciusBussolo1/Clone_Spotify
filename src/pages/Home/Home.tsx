import React from "react";

import { MenuLateral } from "../../components/menu_lateral/Menu_Lateral";
import { Header } from "../../components/header/Header";

import "./style.scss";

export function Home() {
  return (
    <React.Fragment>
      <MenuLateral></MenuLateral>
      <Header></Header>
    </React.Fragment>
  );
}
