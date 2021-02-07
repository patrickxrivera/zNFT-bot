import { ApolloServer, PubSub } from "apollo-server-express";
import { applyMiddleware } from "graphql-middleware";
import { nexusPrisma } from "nexus-plugin-prisma";
import { makeSchema, declarativeWrappingPlugin } from "@nexus/schema";
import prisma from "../setup/models";
import types from "../types";
import permissions from "../services/permissions";

const pubsub = new PubSub();

const setupApolloServer = () => {
  return new ApolloServer({
    schema: applyMiddleware(
      makeSchema({
        types,
        plugins: [nexusPrisma(), declarativeWrappingPlugin()],
        outputs: {
          schema: __dirname + "/../schema.graphql",
          typegen: __dirname + "/generated/nexus.ts",
        },
      }),
      permissions
    ),
    context: (request) => {
      return {
        ...request,
        prisma,
        pubsub,
      };
    },
    introspection: true,
    playground: true,
  });
};

export default setupApolloServer;
