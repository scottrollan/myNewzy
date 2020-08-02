const axios = require('axios');

const API_KEY = process.env.REACT_APP_RAPID_API_KEY;

export const fetchArticles = async (searchParams) => {
  // await new Promise(async (resolve) => {
  const response = await axios({
    method: 'GET',
    url: `https://newscatcher.p.rapidapi.com/v1/${searchParams}`,
    headers: {
      'x-rapidapi-key': API_KEY,
    },
  });
  const results = await response.data.articles;
  return results;
};
