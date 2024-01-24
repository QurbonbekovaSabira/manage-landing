import React from "react";
import { Rulecard } from "../ruleCard";
import style from "./about.module.scss";
export const About = () => {
  return (
    <section className={style.about}>
      <div id="container" className={style.about_container}>
        <div>
          <h2 className={style.title}>What’s different about Manage?</h2>
          <p className={style.text}>
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </p>
        </div>
        <div className={style.textBox}>
          <Rulecard
            number={1}
            title="Track company-wide progress"
            text="See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again."
          />
          <Rulecard
            number={2}
            title="Advanced built-in reports"
            text="Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed."
          />
          <Rulecard 
            number={3}
            title="Everything you need in one place"
            text="Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution."
          />
        </div>
      </div>
    </section>
  );
};
