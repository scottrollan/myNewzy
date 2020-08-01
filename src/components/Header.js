import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import GoogleAuth from './GoogleAuth';
import styles from './Header.module.scss';

const Header = ({ fetch, client, isSignedIn }) => {
  const seeMyArticles = () => {
    const userId = window.gapi.auth2
      .getAuthInstance()
      .currentUser.get()
      .getId();
    client(`*[user == "${userId}"] | order(_createdAt desc)`);
  };

  return (
    <div className={styles.header}>
      <div>
        <h1>
          <em>Newzy</em>
        </h1>
      </div>

      <div>
        <GoogleAuth />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn, userId: state.auth.userId };
};

export default connect(mapStateToProps)(Header);
