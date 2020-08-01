import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import styles from './Search.module.scss';

const Headlines = ({ fetch }) => {
  return (
    <div>
      <Button onClick={() => fetch()} className={styles.buttonLeft}>
        Top Headlines
      </Button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn, userId: state.auth.userId };
};

export default connect(mapStateToProps)(Headlines);
