const SANITY_KEY = process.env.REACT_APP_SANITY_KEY;

const sanityClient = require('@sanity/client');
export const Client = sanityClient({
  projectId: 'et6pegti',
  dataset: 'production',
  token:
    // 'skFBXTxVA2Xij2mYBQ6kQQqmd4zejVz2iNZFvump1TFYFymLiC1fe56jCTn4pAFHiMo4ptv7sCekHncZSQtsB8Ey9pGkfiCHjHObgswNAooLg2VDIK6oTJsneqUCpZq25z4w10ObJRxHX1IgTcnz2tYbsQQRcm1vRcMF4n0AgSjWMA8RVCuG',
    SANITY_KEY,
  useCdn: false, // `false` if you want to ensure fresh data
  ignoreBrowserTokenWarning: true,
});
