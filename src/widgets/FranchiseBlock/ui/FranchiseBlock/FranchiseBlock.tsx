import React, { FC } from "react";
import { Link } from "react-router-dom";

import Image from "/public/images/lace.png";

import { Button } from "shared";

import style from "./FranchiseBlock.module.scss";

export const FranchiseBlock: FC = () => {
  return (
    <section
      className={style.franchise}
      style={{ backgroundImage: `url(${Image})` }}
    >
      <h3>Открой свой poke-room «МногоРыбы»</h3>
      <Link to={`/franchise`} className={style.createPokeButton}>
        <Button
          className={style.buttonShowMore}
          color="white"
          type="button"
        >
          Подробнее
        </Button>
      </Link>
    </section>
  );
};
