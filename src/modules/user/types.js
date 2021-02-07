import { objectType } from "@nexus/schema";

const AuthPayload = objectType({
  name: "AuthPayload",
  definition(t) {
    t.string("token");
    t.field("user", { type: "User" });
  },
});

const User = objectType({
  name: "User",
  definition(t) {
    t.model.id();
    t.model.email();
  },
});

export default {
  AuthPayload,
  User,
};
