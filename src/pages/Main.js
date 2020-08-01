import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import SearchArea from '../components/Search/SearchArea';
import ResultsArea from '../components/ResultsArea';
import SavedArticles from '../components/SavedArticles';
import { fetchArticles, fetchKeywordArticles } from '../api/fetch.js';
import { Client } from '../api/sanityClient';
// import $ from 'jquery';
import styles from './Main.module.scss';

const Main = () => {
  const [articles, setArticles] = useState([]);
  const [savedArticles, setSavedArticles] = useState([]);

  const fetch = async (searchParams) => {
    try {
      const results = await fetchArticles(searchParams);
      setArticles([articles, ...results]);
      setSavedArticles([]);
    } catch (err) {
      console.log(err.message);
    }
  };

  const client = async (val) => {
    console.log('Passed parameters: ', val);
    const results = await Client.fetch(val);
    console.log(results);
    const theseArticles = [...results];
    setSavedArticles([savedArticles, ...theseArticles]);
    setArticles([]);
  };

  return (
    <div className={styles.main}>
      <Header client={client} />
      <SearchArea fetch={fetch} fetchKeyword={fetchKeywordArticles} />
      <ResultsArea articles={articles} />
      <SavedArticles articles={savedArticles} />
    </div>
  );
};

export default Main;
