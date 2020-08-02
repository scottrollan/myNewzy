import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import styles from './Search.module.scss';

const Headlines = ({ fetch }) => {
  return (
    <Button onClick={() => fetch()} className={styles.headlinesButton}>
      Top Headlines
    </Button>
  );
};

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn, userId: state.auth.userId };
};

export default connect(mapStateToProps)(Headlines);
