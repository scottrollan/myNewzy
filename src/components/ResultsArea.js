import React from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';
import ScrollToTop from './ScrollToTop';
import styles from './ResultsArea.module.scss';

const ResultsArea = ({ articles, isSignedIn }) => {
  return (
    <CardGroup className={styles.cardGroup}>
      <ScrollToTop />
      {articles.map((a, index) => {
        return (
          <Card
            key={`${a.publishedAt}${index}`}
            className={styles.card}
            style={{ display: !a.description ? 'none' : 'inherit' }}
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
                  <a
                    href={a.url}
                    className={styles.cardButton}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Go to story
                  </a>

                  <Button
                    className={styles.cardButton}
                    display={isSignedIn ? 'inherit' : 'none'}
                  >
                    Save for later
                  </Button>
                  <div
                    className={styles.cardButton}
                    display={isSignedIn ? 'none' : 'inherit'}
                  >
                    Login to save
                  </div>
                </footer>
              </blockquote>
            </Card.Body>
          </Card>
        );
      })}
    </CardGroup>
  );
};

export default ResultsArea;
