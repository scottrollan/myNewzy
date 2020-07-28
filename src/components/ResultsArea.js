import React from 'react';
import { connect } from 'react-redux';
import { Button, Card, CardGroup } from 'react-bootstrap';
import $ from 'jquery';
import { Client } from '../api/saveArticle';
import ScrollToTop from './ScrollToTop';
import styles from './ResultsArea.module.scss';

const ResultsArea = ({ articles, isSignedIn, userId }) => {
  const onSignInClick = () => {
    $('#signInButton').click();
  };

  const saveThisArticle = async (event) => {
    const saveThisArticle = {
      _type: 'article',
      user: event.target.getAttribute('user'),
      source: {
        id: event.target.getAttribute('id'),
        name: event.target.getAttribute('name'),
      },
      author: event.target.getAttribute('author'),
      title: event.target.getAttribute('title'),
      description: event.target.getAttribute('description'),
      linkToStory: event.target.getAttribute('linktostory'),
      urlToImage: event.target.getAttribute('urltoimage'),
      publishedAt: event.target.getAttribute('publishedat'),
      content: event.target.getAttribute('content'),
    };
    let response = await Client.create(saveThisArticle);
    console.log(response);
  };

  return (
    <CardGroup className={styles.cardGroup}>
      <ScrollToTop />
      {articles.map((a, index) => {
        const source = { ...a.source };
        console.log(source);
        return (
          <Card
            key={`${a.publishedAt}${index}`}
            id={`${a.publishedAt}${index}`}
            className={styles.card}
            style={{
              display: !a.description || !a.content ? 'none' : 'inherit',
            }}
          >
            <Card.Header>
              <h4>{a.title}</h4>
              {a.author ? `by ${a.author}` : null}
              <cite title="Source Title">
                {a.author && a.source ? `- ${a.source.name}` : null}
                {!a.author && a.source ? `${a.source.name}` : null}
              </cite>
            </Card.Header>
            <Card.Body>
              <blockquote className={[`blockquote mb-0 ${styles.blockQuote}`]}>
                <p>{a.description}</p>
                <a
                  href={a.urlToImage}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img className={styles.cardImage} src={a.urlToImage} alt="" />
                </a>
                <footer className={styles.cardFooter}>
                  <Button
                    href={a.url}
                    className={styles.cardButton}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Go to story
                  </Button>
                  <Button
                    onClick={(e) => saveThisArticle(e)}
                    className={styles.cardButton}
                    style={{
                      fontSize: 'small',
                      display: isSignedIn ? 'inline' : 'none',
                    }}
                    user={window.gapi.auth2
                      .getAuthInstance()
                      .currentUser.get()
                      .getId()}
                    id={source.id ? source.id : 'null'}
                    name={source.name ? source.name : ''}
                    author={a.author ? a.author : ''}
                    title={a.title ? a.title : ''}
                    description={a.description ? a.description : ''}
                    linktostory={a.url ? a.url : ''}
                    urltoimage={a.urlToImage ? a.urlToImage : ''}
                    publishedat={a.publishedAt ? a.publishedAt : new Date()}
                    content={a.content ? a.content : ''}
                  >
                    Save for later
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
  return { isSignedIn: state.auth.isSignedIn, userId: state.auth.userId };
};

export default connect(mapStateToProps)(ResultsArea);
