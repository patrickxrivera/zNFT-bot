require("dotenv").config();

import express from "express";
import cors from "cors";
import { createServer } from "http";
import { isProdEnv } from "./config";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import setupApolloServer from "./setup/apolloServer";
import setupWebhooks from "./setup/webhooks";

const app = express();

const port = process.env.PORT || 5000;

app.use(cors({ credentials: true }));
app.use(cookieParser());
app.use(bodyParser.json());

const apolloServer = setupApolloServer();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

setupWebhooks(app);

apolloServer.applyMiddleware({ app, path: "/graphql" });

const httpServer = createServer(app);

apolloServer.installSubscriptionHandlers(httpServer);

httpServer.listen({ port }, () => {
  if (!isProdEnv()) {
    console.log(`Server ready at http://localhost:${port}${apolloServer.graphqlPath}`);
    console.log(`Subscriptions ready at ws://localhost:${port}${apolloServer.subscriptionsPath}`);
  }
});
