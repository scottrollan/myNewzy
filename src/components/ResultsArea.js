import React from 'react';
import { connect } from 'react-redux';
import { Button, Card, CardGroup } from 'react-bootstrap';
import $ from 'jquery';
import { Client } from '../api/sanityClient';
import ScrollToTop from './ScrollToTop';
import styles from './ResultsArea.module.scss';

const ResultsArea = ({ articles, isSignedIn }) => {
  const myHeadlines = articles.filter(
    (headline) => headline.rights !== 'sec.gov'
  );

  const onSignInClick = () => {
    $('#signInButton').click();
  };

  const saveThisArticle = async (event) => {
    const saveButton = event.target.value;
    document.getElementById(`${saveButton}`).style.visibility = 'hidden';
    const savedArticle = {
      _type: 'article',
      user: event.target.getAttribute('user'),
      source: {
        id: event.target.getAttribute('articleid'),
        name: event.target.getAttribute('name'),
      },
      author: event.target.getAttribute('author'),
      title: event.target.getAttribute('title'),
      content: event.target.getAttribute('summary'),
      linkToStory: event.target.getAttribute('link'),
      urlToImage: event.target.getAttribute('media'),
      publishedAt: event.target.getAttribute('published_date'),
    };
    try {
      const response = await Client.create(savedArticle);
      if (response === null || response === undefined) {
        throw alert('Unable to save.');
      }
    } catch (err) {
      alert(err);
    }
  };

  return (
    <CardGroup className={styles.cardGroup}>
      <ScrollToTop />
      {myHeadlines.map((a, index) => {
        let shortSummary = '';
        if (a.summary && a.summary.length > 199) {
          shortSummary = `${a.summary.substring(0, 198)}...`;
        } else if (a.summary && a.summary.length < 199) {
          shortSummary = a.summary;
        }
        return (
          <Card
            key={`${a.published_date}${index}`}
            id={`${a.published_date}${index}`}
            className={styles.card}
            style={{
              display: !a.summary ? 'none' : 'inherit',
            }}
          >
            <Card.Header>
              <h4>{a.title}</h4>
              {a.author ? `by ${a.author}` : null}
              <cite title="Source Title">
                {a.author && a.rights ? `- ${a.rights}` : null}
                {!a.author && a.rights ? `${a.rights}` : null}
              </cite>
            </Card.Header>
            <Card.Body>
              <blockquote className={[`blockquote mb-0 ${styles.blockQuote}`]}>
                <p>{shortSummary}</p>
                <a href={a.media} target="_blank" rel="noreferrer noopener">
                  <img className={styles.cardImage} src={a.media} alt="" />
                </a>
                <footer className={styles.cardFooter}>
                  {' '}
                  <div
                    style={{
                      width: '100%',
                      position: 'relative',
                      minHeight: '50px',
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  >
                    <Button
                      id={`${a.published_date}${index}SaveButton`}
                      onClick={(e) => saveThisArticle(e)}
                      className={styles.cardButton}
                      value={`${a.published_date}${index}SaveButton`}
                      style={{
                        position: 'absolute',
                        fontSize: 'small',
                        display: isSignedIn ? 'inline' : 'none',
                        zIndex: '2',
                        transform: 'translateY(-20px)',
                        backgroundColor: 'white',
                      }}
                      user={window.gapi.auth2
                        .getAuthInstance()
                        .currentUser.get()
                        .getId()}
                      articleid={a._id ? a._id : 'null'}
                      name={a.rights ? a.rights : ''}
                      author={a.author ? a.author : ''}
                      title={a.title ? a.title : ''}
                      summary={a.summary ? a.summary : ''}
                      link={a.link ? a.link : ''}
                      media={a.media ? a.media : ''}
                      published_date={
                        a.published_date ? a.published_date : new Date()
                      }
                    >
                      Save for later
                    </Button>
                    <i
                      className="fas fa-check-circle"
                      style={{
                        position: 'absolute',
                        zIndex: '1',
                        display: isSignedIn ? 'inline' : 'none',
                      }}
                    ></i>
                  </div>
                  <Button
                    href={a.link}
                    className={styles.cardButton}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Go to story
                  </Button>
                  <Button
                    onClick={() => onSignInClick()}
                    className={styles.cardButton}
                    style={{
                      fontSize: 'small',
                      display: isSignedIn ? 'none' : 'inline',
                    }}
                  >
                    Login to save
                  </Button>
                </footer>
              </blockquote>
            </Card.Body>
          </Card>
        );
      })}
    </CardGroup>
  );
};

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps)(ResultsArea);
