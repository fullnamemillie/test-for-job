import React from "react";
import styles from "./Header.module.scss";
const Header = () => {
  return (
    <header className={styles.header}>
      <ul className={styles.first__navigation}>
        <li className={styles.navigation__item}>Цвет</li>
        <li className={styles.navigation__item}>Рамер</li>
        <li className={styles.navigation__item}>Материал</li>
        <li className={styles.navigation__item}>Цена</li>
      </ul>
      <ul className={styles.second__navigation}>
        <li className={styles.navigation__item_botom}></li>
        <li className={styles.navigation__item}>Сортировка</li>
      </ul>
    </header>
  );
};

export default Header;
