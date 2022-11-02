import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import Svg from '../../../ui/Svg/Svg';

import styles from './Icon.module.scss';

const stories = storiesOf('Icon', module);
stories.addDecorator(withKnobs);

stories.add('Icon', () => (
  <div className={styles.wrapper}>
    <div className={styles.icon_wrapper}>
      <Svg name="carrot_2" width="50" height="50" />
    </div>
    <div className={styles.icon_wrapper}>
      <Svg name="fish" width="50" height="50" />
    </div>
    <div className={styles.icon_wrapper}>
      <Svg name="peanut" width="50" height="50" />
    </div>
    <div className={styles.icon_wrapper}>
      <Svg name="pinapple" width="50" height="50" />
    </div>
    <div className={styles.icon_wrapper}>
      <Svg name="sashimi" width="50" height="50" />
    </div>
    <div className={styles.icon_wrapper}>
      <Svg name="sauces" width="50" height="50" />
    </div>
    <div className={styles.icon_wrapper}>
      <Svg name="poke_bowl" width="50" height="50" />
    </div>
    <div className={styles.icon_wrapper}>
      <Svg name="dell_fill" width="24" height="24" />
    </div>
    <div className={styles.icon_wrapper}>
      <Svg name="desk_alt_fill" width="24" height="24" />
    </div>
    <div className={styles.icon_wrapper}>
      <Svg name="done" width="24" height="24" />
    </div>
    <div className={styles.icon_wrapper}>
      <Svg name="ok" width="13" height="12" />
    </div>
    <div className={styles.icon_wrapper}>
      <Svg name="ok_gray" width="13" height="12" />
    </div>
    <div className={styles.icon_wrapper}>
      <Svg name="property_add_ring_fill" width="24" height="24" />
    </div>
    <div className={styles.icon_wrapper}>
      <Svg name="property_add" width="24" height="24" />
    </div>
    <div className={styles.icon_wrapper}>
      <Svg name="property_bag_alt_fill" width="24" height="24" />
    </div>
    <div className={styles.icon_wrapper}>
      <Svg name="property_bag_alt" width="24" height="24" />
    </div>
    <div className={styles.icon_wrapper}>
      <Svg name="property_close_round" width="24" height="24" />
    </div>
    <div className={styles.icon_wrapper}>
      <Svg name="property_expand_down" width="24" height="24" />
    </div>
    <div className={styles.icon_wrapper}>
      <Svg name="property_expand_left" width="24" height="24" />
    </div>
    <div className={styles.icon_wrapper}>
      <Svg name="property_expand_up" width="24" height="24" />
    </div>
    <div className={styles.icon_wrapper}>
      <Svg name="property_menu" width="24" height="24" />
    </div>
    <div className={styles.icon_wrapper}>
      <Svg name="property_minus" width="24" height="24" />
    </div>
    <div className={styles.icon_wrapper}>
      <Svg name="property_remove_fill" width="24" height="24" />
    </div>
    <div className={styles.icon_wrapper}>
      <Svg name="property_xpand_right" width="24" height="24" />
    </div>
    <div className={styles.icon_wrapper}>
      <Svg name="question_fill" width="24" height="24" />
    </div>
    <div className={styles.icon_wrapper}>
      <Svg name="trash" width="24" height="24" />
    </div>
    <div className={styles.icon_wrapper}>
      <Svg name="user_fill" width="24" height="24" />
    </div>
  </div>
));
