import React from "react";
import style from "./btn.module.scss";

export const Btn = ({ color, bg }) => {
  return (
    <button
      style={{ color: color, backgroundColor: bg }}
      className={style.btn}
    >
      Get Started
    </button>
  );
};
