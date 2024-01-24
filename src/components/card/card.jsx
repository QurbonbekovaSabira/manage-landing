import React from "react";
import style from "./card.module.scss";

export const Card = ({url, title, text}) => {
  return (
    <div className={style.card_box}>
      <div>
        <img src={url} alt="" />
      </div>
      <p className={style.title}>{title}</p>
      <p className={style.text}>{text}</p>
    </div>
  );
};
