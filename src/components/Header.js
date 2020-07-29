import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import GoogleAuth from './GoogleAuth';
import styles from './Header.module.scss';

const Header = ({ fetch, client, isSignedIn, userId }) => {
  const seeMyArticles = () => {
    client(`*[user == "${userId}"] | order(_createdAt desc)`);
  };

  return (
    <div className={styles.header}>
      <div className={styles.menuLeft}>
        <span>
          <Button
            onClick={(e) => seeMyArticles(e)}
            className={styles.buttonLeft}
            style={{ display: isSignedIn ? 'initial' : 'none' }}
          >
            My Saved Articles
          </Button>
          <GoogleAuth />
        </span>
      </div>
      <div className={styles.menuCenter}>
        <span>
          <h1>
            <em>Newzy</em>
          </h1>
        </span>
      </div>
      <div className={styles.menuRight}>
        <span>
          <Button
            className={styles.buttonRight}
            variant="primary"
            onClick={() => fetch('top-headlines?country=us')}
          >
            See Top Headlines
          </Button>
        </span>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn, userId: state.auth.userId };
};

export default connect(mapStateToProps)(Header);
