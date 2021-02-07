import TheGraphService from "../services/TheGraph";

const run = async () => {
  const res = await TheGraphService.getMediaById(372);
  console.log(res);
  process.exit();
};

run();
