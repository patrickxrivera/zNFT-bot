import queryTypes from "./Query";
import userTypes from "../modules/user/types";
import mutationTypes from "./Mutation";
import subscriptionTypes from "./Subscription";

export default {
  ...queryTypes,
  ...userTypes,
  ...mutationTypes,
  ...subscriptionTypes,
};
