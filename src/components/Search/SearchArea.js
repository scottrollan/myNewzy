import React, { useState } from 'react';
import DomainSearch from './DomainSearch';
import KeywordSearch from './KeywordSearch';
import styles from './Search.module.scss';

const SearchArea = ({ fetch }) => {
  const [keyword, setKeyword] = useState('');

  return (
    <div className={styles.searchArea}>
      <DomainSearch
        fetch={(inputVaue) => fetch(`everything?sources=${inputVaue}`)}
      />
      <div className={styles.dashedLine}></div>
      <KeywordSearch
        searcTerm={keyword}
        handleChange={(inputValue) => setKeyword(inputValue)}
        handleSubmit={() => fetch(`everything?q=${keyword}`)}
      />
    </div>
  );
};

export default SearchArea;
