import React from 'react';
import { Button } from 'react-bootstrap';
import GoogleAuth from './GoogleAuth';
import styles from './Header.module.scss';

const Header = ({ fetch }) => {
  return (
    <div className={styles.header}>
      <div className={styles.menuLeft}>
        <span>
          <Button className={styles.buttonLeft}>My Saved Articles</Button>
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

export default Header;
