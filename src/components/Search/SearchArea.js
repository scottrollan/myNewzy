import React, { useState } from 'react';
import { connect } from 'react-redux';
import MyArticlesButton from './MyArticlesButton';
import Headlines from './Headlines';
import KeywordSearch from './KeywordSearch';
import styles from './Search.module.scss';

const SearchArea = ({ fetch, client, isSignedIn }) => {
  const [keyword, setKeyword] = useState('');

  return (
    <div className={styles.searchArea}>
      <Headlines
        fetch={() => fetch('latest_headlines?lang=en&media=True&country=US')}
      />
      <MyArticlesButton client={client} />
      <KeywordSearch
        searcTerm={keyword}
        handleChange={(inputValue) => setKeyword(inputValue)}
        handleSubmit={() =>
          fetch(
            // keyword
            `search?media=True&sort_by=relevancy&lang=en&page=1&q=${keyword}`
            // `search?q=${keyword}`
          )
        }
      />
      <div className={styles.dashedLine}></div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn, userId: state.auth.userId };
};

export default connect(mapStateToProps)(SearchArea);
