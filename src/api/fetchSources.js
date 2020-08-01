import $ from 'jquery';

let sources = [];

const fetchSources = () => {
  const settings = {
    async: true,
    crossDomain: true,
    url: 'https://newscatcher.p.rapidapi.com/v1/sources?country=US&lang=en',
    method: 'GET',
    headers: {
      'x-rapidapi-host': 'newscatcher.p.rapidapi.com',
      'x-rapidapi-key': 'f4ef198439msh9d0dd865dec57c1p1655dcjsn6c11aece3749',
    },
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
    sources = [sources, ...response];
    return sources;
  });
};

export { fetchSources };
