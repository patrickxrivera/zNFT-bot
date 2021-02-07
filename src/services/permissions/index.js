import { shield } from "graphql-shield";

const permissions = shield(
  {},
  {
    allowExternalErrors: true,
  }
);

export default permissions;
