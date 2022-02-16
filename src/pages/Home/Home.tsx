import React from "react";

import { Header } from "../../components/header/Header";
import { MenuLateral } from "../../components/menu_lateral/Menu_Lateral";
import { Main } from "../../components/main/Main";

import "./style.scss";

export function Home() {
  return (
    <React.Fragment>
      <MenuLateral></MenuLateral>
      <Header></Header>
      <Main></Main>
    </React.Fragment>
  );
}
