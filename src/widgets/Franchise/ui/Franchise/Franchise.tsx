import React, { FC } from "react";

import Image from "/public/images/lace.png";

import { Button } from "shared";

import style from "./Franchise.module.scss";

const Franchise: FC = () => {
  return (
    <section
      className={style.franchise}
      style={{ backgroundImage: `url(${Image})` }}
    >
      <h3>Открой свой poke-room «МногоРыбы»</h3>
      <Button
        className={style.button_show_more}
        color="white"
        type={"button"}
        onClick={() => {}}
      >
        Подробнее
      </Button>
    </section>
  );
};

export default Franchise;
