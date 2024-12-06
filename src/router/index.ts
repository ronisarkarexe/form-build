import express from "express";
import { FromBuilderRouter } from "../app/modules/from-builder/from-builder.router";
const router = express.Router();

const modules = [
  {
    path: "/from-builder",
    router: FromBuilderRouter,
  },
];

modules.forEach((route) => router.use(route.path, route.router));

export const Routers = router;
