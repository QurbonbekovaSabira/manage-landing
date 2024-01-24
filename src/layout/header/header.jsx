import React from "react";
import style from "./header.module.scss";
import logo from "../../assets/logo.svg";
import {Btn} from "../../components/btn";

export const Header = () => {
  return (
    <header className={style.header}>
      <div id="container" className={style.box} >
        <img src={logo} alt="" />
        <div className={style.box_link}>
          <a className={style.link} href="#">
            Pricing
          </a>
          <a className={style.link} href="#">
            Product
          </a>
          <a className={style.link} href="#">
            About Us
          </a>
          <a className={style.link} href="#">
            Careers
          </a>
          <a className={style.link} href="#">
            Community
          </a>
        </div>
        <Btn />
      </div>
    </header>
  );
};
