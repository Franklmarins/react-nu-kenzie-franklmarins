import React from "react";
import { StartButton } from "../Button";
import Logo from "./../../assets/NuLogo.svg";
import "./style.css";

export const Header = ({ setPage }) => {
  return (
    <header>
      <div className="container ">
        <img src={Logo} alt="Logo-nu-kenzie" />
        <StartButton setPage={setPage} />
      </div>
    </header>
  );
};
