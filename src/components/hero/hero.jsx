import React from "react";
import img_first from "../../assets/hero1.svg";
import img_second from "../../assets/hero2.png";
import img_last from "../../assets/hero3.svg";
import style from "./hero.module.scss";
import { Btn } from "../btn";

export const Hero = () => {
  return (
    <section className={style.hero}>
      <div id="container" className={style.hero__container}>
        <div className={style.hero_contentBox}>
          <h1 className={style.hero_title}>
            Bring everyone together to build better products.
          </h1>
          <p className={style.hero_text}>
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
          <Btn></Btn>
        </div>
        <div className={style.hero_imgBox}>
          <div className={style.hero_first_imgBox}>
            <img src={img_first} alt="hero Img" />
            <img src={img_second} alt="Hero Img" />
          </div>
       <div>
       <img src={img_last} alt="Hero Img" />
       </div>
        </div>
      </div>
    </section>
  );
};
