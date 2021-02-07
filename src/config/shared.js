require("dotenv").config();

export default {
  algoliaApiKey: process.env.ALGOLIA_API_KEY,
  algoliaAppId: "",
  awsSecretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  awsAccessKeyId: process.env.AWS_ACCESS_KEY_ID,
  awsDefaultRegion: process.env.AWS_DEFAULT_REGION,
  awsS3BucketPath: process.env.NODE_ENV === "production" ? "prod" : "dev",
  awsS3BucketName: "",
  awsS3DefaultAccessRights: "public-read",
  infuraProviderId: process.env.INFURA_PROVIDER_ID,
  etherscanAPIKey: process.env.ETHERSCAN_API_KEY,
};
