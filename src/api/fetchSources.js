import axios from 'axios';

let sources = [];

const fetchSources = async () => {
  const res = await axios.get(
    `https://newsapi.org/v2/sources?apiKey=4a91afd2bdda4b18be76a2f996628566`
  );

  sources = [sources, ...res.data.sources];
  return sources;
};

export { fetchSources };
