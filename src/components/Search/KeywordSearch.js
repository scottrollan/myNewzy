import React from 'react';
import { Button } from 'react-bootstrap';
import $ from 'jquery';
import styles from './Search.module.scss';

const KeywordSearch = ({ handleSubmit, searchTerm, handleChange }) => {
  $('#keywordInput').keyup((e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      $('#keywordButton').click();
    }
  });

  const submitHandler = () => {
    $('#keywordInput').val('');
    handleSubmit();
  };

  return (
    <div className={styles.keywordArea}>
      <input
        className={styles.keywordInput}
        id="keywordInput"
        placeholder="search by keyword/s"
        value={searchTerm}
        onChange={(e) => handleChange(e.target.value)}
      ></input>
      <Button
        type="submit"
        onClick={() => submitHandler()}
        value={searchTerm}
        className={styles.keywordButton}
        id="keywordButton"
      >
        Search
      </Button>
    </div>
  );
};

export default KeywordSearch;
