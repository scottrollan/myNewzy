import React from 'react';
import { connect } from 'react-redux';
import GoogleAuth from './GoogleAuth';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles.header}>
      <div>
        <h1>
          <em>Newzy</em>
        </h1>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <GoogleAuth />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn, userId: state.auth.userId };
};

export default connect(mapStateToProps)(Header);
