import path from "path";
import Bree from "bree";
import jobs from "../jobs";

export default () => {
  const bree = new Bree({
    root: path.resolve("build", "jobs"),
    jobs,
  });

  bree.start();
};
