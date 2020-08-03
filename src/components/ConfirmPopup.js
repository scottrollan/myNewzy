import React from 'react';
import { Button } from 'react-bootstrap';
import { Client } from '../api/sanityClient';
import $ from 'jquery';
import styles from './ConfirmButton.module.scss';

const ConfirmPopup = ({ articleId, popupId }) => {
  const deleteArticle = (event) => {
    const article = event.target.value;
    const popup = `#${popupId}`;
    Client.delete(article);
    $(popup).css('display', 'none');
    $(`#${article}`).css('visibility', 'hidden');
  };

  const closeThis = () => {
    $(`#${popupId}`).css('display', 'none');
  };
  return (
    <div className={styles.confirmPopup} id={popupId}>
      <div className={styles.overlay}>
        <div className={styles.whiteSpace}>
          <h5>Are you sure you want to delete the article?</h5>
          <div>
            <Button value={articleId} onClick={(e) => deleteArticle(e)}>
              Yes, get rid of it forever.
            </Button>
            <Button onClick={() => closeThis()}>
              Nevermind, keep it for now.
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmPopup;
