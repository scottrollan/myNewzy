const request = require('request');

const API_KEY = process.env.REACT_APP_RAPID_API_KEY;

export const fetchArticles = (searchParams) =>
  new Promise((resolve) => {
    let results = [];

    const options = {
      method: 'GET',
      url: `https://newscatcher.p.rapidapi.com/v1/${searchParams}`,
      headers: {
        'x-rapidapi-key': API_KEY,
      },
    };

    request(options, function (error, response) {
      // if (error) throw new Error(error);
      const data = JSON.parse(response.body);
      results = [...data.articles];
      console.log(results);
      if (results.length > 0) {
        resolve(results);
      }
    });
  });

export const fetchKeywordArticles = (searchParams) =>
  new Promise((resolve) => {
    let results = [];

    const options = {
      method: 'GET',
      url: 'https://newscatcher.p.rapidapi.com/v1/search',
      qs: {
        media: 'True',
        sort_by: 'relevancy',
        lang: 'en',
        page: '1',
        q: 'Elon Musk',
      },
      headers: {
        'x-rapidapi-host': 'newscatcher.p.rapidapi.com',
        'x-rapidapi-key': 'f4ef198439msh9d0dd865dec57c1p1655dcjsn6c11aece3749',
        useQueryString: true,
      },
    };

    request(options, function (error, response) {
      if (error) throw new Error(error);
      const data = JSON.parse(response.body);
      results = [...data.articles];
      console.log(results);
      if (results.length > 0) {
        resolve(results);
      }
    });
  });
