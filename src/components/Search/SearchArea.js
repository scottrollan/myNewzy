import React, { useState } from 'react';
import Headlines from './Headlines';
import KeywordSearch from './KeywordSearch';
import styles from './Search.module.scss';

const SearchArea = ({ fetch }) => {
  const [keyword, setKeyword] = useState('');

  return (
    <div className={styles.searchArea}>
      <Headlines
        fetch={() => fetch('latest_headlines?lang=en&media=True&country=US')}
      />
      <KeywordSearch
        searcTerm={keyword}
        handleChange={(inputValue) => setKeyword(inputValue)}
        handleSubmit={() => fetch(`search?media=True&lang=en&q=${keyword}`)}
      />
      <div className={styles.dashedLine}></div>
    </div>
  );
};

export default SearchArea;
