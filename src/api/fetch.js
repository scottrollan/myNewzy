import axios from 'axios';

let returnedArticles = [];

const fetchArticles = async (searchParams) => {
  const res = await axios.get(
    `https://newsapi.org/v2/${searchParams}&apiKey=4a91afd2bdda4b18be76a2f996628566`
  );
  returnedArticles = await [...res.data.articles];
  console.log(returnedArticles);
  return returnedArticles;
};

export { fetchArticles };
