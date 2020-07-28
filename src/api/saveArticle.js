const sanityClient = require('@sanity/client');
export const Client = sanityClient({
  projectId: 'et6pegti',
  dataset: 'production',
  token:
    'skRRUKYRigKxtIXgGlUJavWoNtnyuDNp3AtFoMk35GwRN9EwaPNH5GXpIYT2yFWagW1RI8BozzuiXau2J781FhiSUH7mPoCiltagORp6R6ZhKcjnRZHRgCB4DQvHODuNIXpLGJaMPDNCoGKKXRVZpMiR4jsWmUm3Ws6bW712MKJQGIQhCLd6',
  useCdn: false, // `false` if you want to ensure fresh data
  ignoreBrowserTokenWarning: true,
});
