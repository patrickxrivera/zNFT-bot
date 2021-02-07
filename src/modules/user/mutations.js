import { stringArg } from "@nexus/schema";
import { requiredStringArg } from "../../utils/args";
import { loginResolver, signUpResolver } from "./resolvers";

const signUp = {
  type: "AuthPayload",
  args: {
    email: requiredStringArg(),
    password: requiredStringArg(),
  },
  resolve: signUpResolver,
};

const login = {
  type: "AuthPayload",
  args: {
    email: requiredStringArg(),
    password: requiredStringArg(),
  },
  resolve: loginResolver,
};

export default {
  signUp,
  login,
};
