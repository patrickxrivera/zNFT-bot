require("dotenv").config();

export default {
  infuraProviderId: process.env.INFURA_PROVIDER_ID,
  etherscanAPIKey: process.env.ETHERSCAN_API_KEY,
  twitterConsumerKey: process.env.TWITTER_CONSUMER_KEY,
  twitterConsumerSecret: process.env.TWITTER_CONSUMER_SECRET,
  twitterAccessToken: process.env.TWITTER_ACCESS_TOKEN,
  twitterAccessTokenSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
};
