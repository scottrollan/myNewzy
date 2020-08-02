import React from 'react';
import { Button } from 'react-bootstrap';
import { Client } from '../api/sanityClient';
import $ from 'jquery';
import styles from './ConfirmButton.module.scss';

const ConfirmPopup = ({ articleId }) => {
  const deleteArticle = (articleId) => {
    Client.delete(articleId);
  };
  const closeThis = (whichPopup) => {
    $(`#${whichPopup}`).css('display', 'none');
  };
  return (
    <div className={styles.confirmPopup} id={`popup${articleId}`}>
      <div className={styles.overlay}>
        <div className={styles.whiteSpace}>
          <h5>Are you sure you want to delete the article?</h5>
          <div>
            <Button onClick={(articleId) => deleteArticle(articleId)}>
              Yes, get rid of it forever.
            </Button>
            <Button onClick={() => closeThis(`popup${articleId}`)}>
              Nevermind, keep it for now.
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmPopup;
