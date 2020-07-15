import "reflect-metadata";
import dotenv from "dotenv";
import { InversifyExpressServer } from "inversify-express-utils";

dotenv.config();

import express from "express";
import helmet from "helmet";

import { ContainerLoader } from "./container";
import { DbConnection } from "./db/utils/connection.db"
const app: express.Application = express();

const container = ContainerLoader.load();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());

DbConnection.initConnection().then(() => {
    const server = new InversifyExpressServer(container, null, null, app);
    const serverInstance = server.build();
    serverInstance.listen(process.env.PORT);
    console.log(`Server started on port ${process.env.PORT}`);
});

process.on('SIGINT', () => {
  DbConnection.disconnect().then(() => {
    console.log(`DbConnection Closed`)
    process.exit();
  });
})