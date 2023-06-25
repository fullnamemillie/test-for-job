"use client";
import React, { useRef } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./MainContent.module.scss";
import Cards from "../Cards/Cards";

const MainContent = () => {
  const src = "https://api.lichi.com/category/get_category_product_list";

  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(2);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (loading && currentPage < totalPages) {
      setError(null);
      axios
        .post(src, {
          category: "clothes",
          lang: 1,
          shop: 1,
          limit: 12,
          page: currentPage,
        })
        .then((data) => {
          setArticles([...articles, ...data.data.api_data.aProduct]);
          setCurrentPage((prevState) => prevState + 1);
          setTotalPages(data.data.api_data.iPages);
        })
        .catch((err) => setError(err))
        .finally(() => setLoading(false));
    }
  }, [loading]);

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);

    setLoading(true);

    return function () {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = (e) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
      100
    ) {
      setLoading(true);
    }
  };

  return (
    <div className={styles.wrapper}>
      {articles.map((article) => (
        <Cards article={article} />
      ))}
    </div>
  );
};

export default MainContent;
