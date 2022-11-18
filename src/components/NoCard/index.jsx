import React from "react";
import Card from "./../../assets/NoCard.svg";
import "./style.css";

export const NoCard = () => {
  return <img className="no-card" src={Card} alt="no-card" />;
};
