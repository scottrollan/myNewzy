import React from 'react';
import { Button } from 'react-bootstrap';
import styles from './Search.module.scss';

const KeywordSearch = ({ handleSubmit, searchTerm, handleChange }) => {
  return (
    <div className={styles.keywordArea}>
      <input
        className={styles.keywordInput}
        placeholder="search by keyword/s"
        value={searchTerm}
        onChange={(e) => handleChange(e.target.value)}
      ></input>
      <Button
        type="submit"
        onClick={() => handleSubmit()}
        value={searchTerm}
        className={styles.keywordButton}
      >
        Search
      </Button>
    </div>
  );
};

export default KeywordSearch;
