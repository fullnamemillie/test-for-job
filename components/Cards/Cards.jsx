import React from "react";
import styles from "../MainContent/MainContent.module.scss";

const Cards = ({ articles }) => {
  return (
    <div className={styles.wrapper}>
      {articles.map((article) => (
        <div className={styles.block} key={article.id}>
          <img
            className={styles.dress__photo}
            src={article.photos[1].big}
            alt="dress"
          />
          <div className={styles.dress__name}>
            <p>{article.name}</p>
          </div>
          <div className={styles.dress__price}>{article.price} руб.</div>
          <div className={styles.dress__color}>
            {article.colors.current.name}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
