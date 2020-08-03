const SANITY_KEY = process.env.REACT_APP_SANITY_KEY;

const sanityClient = require('@sanity/client');
export const Client = sanityClient({
  projectId: 'et6pegti',
  dataset: 'production',
  token: SANITY_KEY,
  useCdn: false, // `false` if you want to ensure fresh data
  ignoreBrowserTokenWarning: true,
});
