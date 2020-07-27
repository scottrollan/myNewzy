import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import $ from 'jquery';
import styles from './ResultsArea.module.scss';

const ScrollToTop = () => {
  const scrollUp = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  const scrollFunction = () => {
    window.pageYOffset < 500 ? $('#scrollBtn').hide() : $('#scrollBtn').show();
  };

  useEffect(() => {
    window.pageYOffset === 0 ? $('#scrollBtn').hide() : $('#scrollBtn').show();
    window.addEventListener('scroll', scrollFunction);
  }, []);

  return (
    <Button
      onClick={scrollUp}
      id="scrollBtn"
      className={styles.scrollButton}
      style={styles}
      title="Go to top"
    >
      Top
    </Button>
  );
};

export default ScrollToTop;
