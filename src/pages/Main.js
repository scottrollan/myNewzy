import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import SearchArea from '../components/Search/SearchArea';
import ResultsArea from '../components/ResultsArea';
import SavedArticles from '../components/SavedArticles';
import { fetchArticles } from '../api/fetch.js';
import { Client } from '../api/sanityClient';
import $ from 'jquery';
import styles from './Main.module.scss';

const Main = () => {
  const [articles, setArticles] = useState([]);
  const [savedArticles, setSavedArticles] = useState([]);
  let theseArticles = [];

  const fetch = async (searchParams) => {
    const results = await fetchArticles(searchParams);
    theseArticles = [...results];
    setArticles([articles, ...theseArticles]);
    setSavedArticles([]);
  };

  const client = async (val) => {
    console.log('Passed parameters: ', val);
    const results = await Client.fetch(val);
    console.log(results);
    theseArticles = [...results];
    setSavedArticles([savedArticles, ...theseArticles]);
    setArticles([]);
  };

  return (
    <div className={styles.main}>
      <Header fetch={fetch} client={client} />
      <SearchArea fetch={fetch} />
      <ResultsArea articles={articles} />
      <SavedArticles articles={savedArticles} />
    </div>
  );
};

export default Main;
