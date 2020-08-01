import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';
import { Button } from 'react-bootstrap';
import styles from './Header.module.scss';

class GoogleAuth extends React.Component {
  state = {
    userId: '',
  };

  componentDidMount() {
    this.doGapiStuff();
  }

  doGapiStuff = () => {
    window.gapi.load('client:auth2', async () => {
      window.gapi.client.init({
        clientId:
          '363793726399-gmgdm1h7a62lum1m01l36v0b86uco1mv.apps.googleusercontent.com',
        scope: 'email',
      });
      this.auth = await window.gapi.auth2.getAuthInstance();
      this.userId = await this.auth.currentUser.get().getId();
      this.onAuthChange(this.auth.isSignedIn.get(), await this.userId);
      this.auth.isSignedIn.listen(this.onAuthChange);
    });
  };

  onAuthChange = (isSignedIn, userId) => {
    if (isSignedIn) {
      this.props.signIn(userId);
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <Button onClick={this.onSignOutClick} className={styles.loggedInButton}>
          <i className="fab fa-google"></i> {'  '}
          Sign out
        </Button>
      );
    } else {
      return (
        <Button
          onClick={this.onSignInClick}
          className={styles.loggedOutButton}
          id="signInButton"
        >
          <i className="fab fa-google"></i>
          {'  '}
          Sign in with Google
        </Button>
      );
    }
  }
  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
