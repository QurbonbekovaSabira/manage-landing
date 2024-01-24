import React from "react";
import { Card } from "../card";
import imgFirst from "../../assets/saidImg1.svg";
import imgSecond from "../../assets/saidImg2.svg";
import imgLast from "../../assets/saidImg3.svg";
import style from "./said.module.scss"
import { Btn } from "../btn";
export const Said = () => {
  return (
    <section className={style.said}>
      <div id="container" className={style.said_container}>
        <h2 className={style.title}>What they’ve said</h2>
       <div className={style.cardBox}>
       <Card
          url={imgFirst}
          title="Anisha Li"
          text="  “Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”"
        />
        <Card
          url={imgSecond}
          title="Ali Bravo"
          text="“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”"
        />
        <Card
          url={imgLast}
          title="Richard Watts"
          text="“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”"
        />
       </div>
       <Btn></Btn>
      </div>
    </section>
  );
};
