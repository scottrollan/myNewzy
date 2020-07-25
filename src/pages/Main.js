import React, { useState } from 'react';
import { Button, CardGroup, Card } from 'react-bootstrap';
import { fetchArticles } from '../api/fetch.js';
import styles from './Main.module.scss';

const Main = () => {
  const [articles, setArticles] = useState([]);
  let theseArticles = [];

  const fetch = async (searchParams) => {
    const results = await fetchArticles(searchParams);
    theseArticles = [...results];
    setArticles([articles, ...theseArticles]);
    setTimeout(() => console.log('theseArticles: ', theseArticles), 500);
    setTimeout(() => console.log('articles: ', articles), 1000);
  };

  return (
    <div>
      <Button
        variant="primary"
        onClick={() => fetch('top-headlines?country=us')}
      >
        See Top Headlines
      </Button>
      <CardGroup className={styles.cardGroup}>
        {articles.map((h) => {
          return (
            <Card
              key={`${h.publishedAt}${h.url}`}
              className={styles.card}
              style={{ display: !h.description ? 'none' : 'inherit' }}
            >
              <Card.Header>{h.title}</Card.Header>
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p>{h.description}</p>
                  <img className={styles.cardImage} src={h.urlToImage} alt="" />
                  <footer
                    className={[`blockquote-footer ${styles.cardFooter}`]}
                  >
                    <div>
                      {h.author} <cite title="Source Title"></cite>
                    </div>
                    <Button className={styles.cardButton}>Go to story</Button>
                    <Button className={styles.cardButton}>
                      Save for later
                    </Button>
                  </footer>
                </blockquote>
              </Card.Body>
            </Card>
          );
        })}
      </CardGroup>
    </div>
  );
};

export default Main;
