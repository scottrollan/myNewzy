import React from 'react';
import { connect } from 'react-redux';
import { Button, Card, CardGroup } from 'react-bootstrap';
import $ from 'jquery';
import ConfirmPopup from '../components/ConfirmPopup';
import ScrollToTop from './ScrollToTop';
import styles from './ResultsArea.module.scss';

const SavedArticles = ({ articles }) => {
  const openConfirm = (openThis) => {
    console.log(openThis);
    $(`#${openThis}`).css('display', 'flex');
  };
  const myArticles = articles.filter((article) => article._id);
  return (
    <CardGroup className={styles.savedCardGroup}>
      <ScrollToTop />
      {myArticles.map((a, index) => {
        return (
          <Card key={a._id} id={a._id} className={styles.card}>
            <div className={styles.deleted} id={`$deleted${index}`}>
              <h4>This article was deleted</h4>
            </div>
            <ConfirmPopup articleId={a._id} popupId={`popup${index}`} />
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
                  href={a.linkToStory}
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
                  <Button
                    className={styles.deleteButton}
                    onClick={() => openConfirm(`popup${index}`)}
                  >
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
