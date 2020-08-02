import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import styles from './Search.module.scss';

const MyArticlesButton = ({ client, isSignedIn }) => {
  const seeMyArticles = () => {
    const userId = window.gapi.auth2
      .getAuthInstance()
      .currentUser.get()
      .getId();
    client(`*[user == "${userId}"] | order(_createdAt desc)`);
  };

  return (
    <Button
      className={styles.savedArticlesButton}
      onClick={() => seeMyArticles()}
      style={{ display: isSignedIn ? 'block' : 'none' }}
    >
      My Saved Articles
    </Button>
  );
};

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps)(MyArticlesButton);
