import React from 'react';
import { connect } from 'react-redux';
import { Button, Card, CardGroup } from 'react-bootstrap';
import ConfirmPopup from '../components/ConfirmPopup';
import ScrollToTop from './ScrollToTop';
import styles from './ResultsArea.module.scss';

const SavedArticles = ({ articles, userId }) => {
  return (
    <CardGroup className={styles.savedCardGroup}>
      <ScrollToTop />
      {articles.map((a, index) => {
        return (
          <Card
            key={`${a.publishedAt}${index}`}
            id={`${a.publishedAt}${index}`}
            className={styles.card}
            style={{
              display: !a.content && !a.title ? 'none' : 'inherit',
            }}
          >
            <ConfirmPopup articleId={a._id} />
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
                <Button
                  href={a.url}
                  className={styles.cardButton}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Go to story
                </Button>
                <a
                  href={a.urlToImage}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img className={styles.cardImage} src={a.urlToImage} alt="" />
                </a>
                <footer className={styles.cardFooter}>
                  <Button className={styles.deleteButton} variant="danger">
                    Delete Story
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
  return { userId: state.auth.userId };
};

export default connect(mapStateToProps)(SavedArticles);
