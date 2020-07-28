import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import SearchArea from '../components/Search/SearchArea';
import ResultsArea from '../components/ResultsArea';
import { fetchArticles } from '../api/fetch.js';
import $ from 'jquery';
import styles from './Main.module.scss';

const Main = () => {
  const [articles, setArticles] = useState([]);
  let theseArticles = [];

  const fetch = async (searchParams) => {
    const results = await fetchArticles(searchParams);
    theseArticles = [...results];
    setArticles([articles, ...theseArticles]);
    $('.cardGroup').css('display', 'flex');
  };

  return (
    <div className={styles.main}>
      <Header fetch={fetch} />
      <SearchArea fetch={fetch} />
      <ResultsArea articles={articles} />
    </div>
  );
};

export default Main;
