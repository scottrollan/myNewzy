import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import SearchArea from '../components/Search/SearchArea';
import ResultsArea from '../components/ResultsArea';
import { fetchArticles } from '../api/fetch.js';
import $ from 'jquery';
import styles from './Main.module.scss';

const Main = () => {
  const [articles, setArticles] = useState([]);
  // const [isSignedIn, setIsSignedIn] = useState(null);
  let theseArticles = [];
  // let auth = null;

  const fetch = async (searchParams) => {
    const results = await fetchArticles(searchParams);
    theseArticles = [...results];
    setArticles([articles, ...theseArticles]);
    $('.cardGroup').css('display', 'flex');
  };

  // const checkLogin = () => {
  //   window.gapi.load('client:auth2', () => {
  //     window.gapi.client
  //       .init({
  //         clientId:
  //           '363793726399-gmgdm1h7a62lum1m01l36v0b86uco1mv.apps.googleusercontent.com',
  //         scope: 'email',
  //       })
  //       .then(() => {
  //         auth = window.gapi.auth2.getAuthInstance();
  //         setIsSignedIn(auth.isSignedIn.get());
  //         auth.isSignedIn.listen(onAuthChange);
  //       });
  //   });
  // };

  // const onAuthChange = () => {
  //   setIsSignedIn(auth.isSignedIn.get());
  // };

  // useEffect(() => {
  //   checkLogin();
  // }, []);

  return (
    <div className={styles.main}>
      <Header fetch={fetch} />
      <SearchArea fetch={fetch} />
      <ResultsArea articles={articles} />
    </div>
  );
};

export default Main;
