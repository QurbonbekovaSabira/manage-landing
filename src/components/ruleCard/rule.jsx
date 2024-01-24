import React from "react";
import style from "./rule.module.scss";

export const Rulecard = ({ number,title,text}) => {
  return (
    <div className={style.ruleBox}>
      <button className={style.btn}>{number}</button>
      <div>
        <p className={style.about_title}>{title}</p>
        <p className={style.about_text}>{text}</p>
      </div>
    </div>
  );
};
