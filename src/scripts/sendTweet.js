import TwitterService from "../services/Twitter";

const run = async () => {
  await TwitterService.sendTweet({});

  process.exit();
};

run();
