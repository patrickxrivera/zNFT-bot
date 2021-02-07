import development from "./development";
import production from "./production";
import shared from "./shared";

const isProdEnv = () => process.env.NODE_ENV === "production";

const config = isProdEnv() ? production : development;

module.exports = {
  ...shared,
  ...config,
  isProdEnv,
};
