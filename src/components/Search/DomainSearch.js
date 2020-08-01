import React, { useState, useEffect } from 'react';
import { fetchSources } from '../../api/fetchSources';
import { Button } from 'react-bootstrap';
import styles from './Search.module.scss';

const DomainSearch = ({ fetch }) => {
  const [sources, setSources] = useState([]);
  const [mySources, setMySources] = useState([
    { id: 'abc-news', name: 'ABC News' },
    { id: 'associated-press', name: 'Associated Press' },
    { id: 'buzzfeed', name: 'Buzzfeed' },
    { id: 'msnbc', name: 'MSNBC' },
  ]);

  const addNewsSource = (newSource) => {
    const valueArray = newSource.split(' ');
    const idStr = valueArray.shift().concat('&language=en');
    const nameStr = valueArray.join(' ');
    const valueObject = { id: idStr, name: nameStr };
    setMySources([...mySources, valueObject]);
  };

  const renderSources = async () => {
    const theseSources = await fetchSources();
    // console.log('theseSources: ', theseSources);
    setSources([...sources, ...theseSources]);
  };

  useEffect(() => {
    renderSources();
  }, []);

  return (
    <div className={styles.domainArea}>
      <h5>My News Favorites</h5>
      <div className={styles.buttonRow}>
        {mySources.map((m) => {
          return (
            <Button
              onClick={(e) => fetch(e.target.value)}
              className={styles.sourceButton}
              value={m.id}
              key={m.id}
            >
              {m.name}
            </Button>
          );
        })}
      </div>
      <div className={styles.selectRow}>
        <span>Add a News Favorite: </span>
        <select onChange={(e) => addNewsSource(e.target.value)} defaultValue>
          {sources.map((s, index) => (
            <option value={`${s.id} ${s.name}`} key={`${s.id}${index}`}>
              {s.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default DomainSearch;
