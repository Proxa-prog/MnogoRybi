import React, { FC } from 'react';
import Button from 'shared/ui/Button/Button';

import Image from '/public/images/lace.png';

import style from './Franchise.module.scss';

export interface FranchiseProps {

}

const Franchise: FC<FranchiseProps> = (props) => {

    return (
        <section
        className={style.franchise}
        style={{backgroundImage: `url(${Image})`}}
        >
            <h3>Открой свой poke-room «МногоРыбы»</h3>
            <Button
                className={style.button_show_more}
                color='white'
                type={'button'}
                onClick={() => { }}
            >
                Подробнее
            </Button>
        </section>
    )
}

export default Franchise;
