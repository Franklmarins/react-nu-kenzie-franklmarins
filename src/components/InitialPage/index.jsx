import React from "react";
import Logo from "./../../assets/NuKenzieLogo.svg";
import Illustration from "./../../assets/illustration.svg";
import "./style.css";
import { InitialButton } from "../Button";

export const InitialPage = ({ setPage }) => {
  return (
    <main className="initial-page-main">
      <div className="container">
        <section className="initial-page-infos">
          <img src={Logo} alt="logo-nu-kenzie" />
          <h1>Centralize o controle das suas finanças</h1>
          <p>de forma rápida e segura</p>
          <InitialButton setPage={setPage} />
        </section>
        <section className="illustration-img">
          <img src={Illustration} alt="ilustração-pagina-inicial" />
        </section>
      </div>
    </main>
  );
};
