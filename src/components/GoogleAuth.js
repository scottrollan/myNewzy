import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import styles from './Header.module.scss';

const GoogleAuth = () => {
  const [isSignedIn, setIsSignedIn] = useState(null);

  let auth = null;

  const doSignInThing = () => {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId:
            '363793726399-gmgdm1h7a62lum1m01l36v0b86uco1mv.apps.googleusercontent.com',
          scope: 'email',
        })
        .then(() => {
          auth = window.gapi.auth2.getAuthInstance();
          setIsSignedIn(auth.isSignedIn.get());
          auth.isSignedIn.listen(onAuthChange);
        });
    });
  };

  const onAuthChange = () => {
    setIsSignedIn(auth.isSignedIn.get());
  };
  useEffect(() => {
    doSignInThing();
  }, []);

  return (
    <div>
      <Button
        onClick={() => window.gapi.auth2.getAuthInstance().signOut()}
        style={{ display: isSignedIn ? 'inherit' : 'none' }}
        className={styles.loggedInButton}
      >
        <i className="fab fa-google" style={{ color: '#DB4437' }}></i>
        {'  '}
        Logout
      </Button>
      <Button
        onClick={() => window.gapi.auth2.getAuthInstance().signIn()}
        style={{ display: isSignedIn ? 'none' : 'inherit' }}
        className={styles.loggedOutButton}
      >
        <i className="fab fa-google" style={{ color: '#DB4437' }}></i>
        {'  '}
        Login
      </Button>
    </div>
  );
};

export default GoogleAuth;
