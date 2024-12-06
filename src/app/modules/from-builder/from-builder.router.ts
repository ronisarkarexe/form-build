import express from "express";
import { FromBuilderController } from "./from-builder.controller";

const router = express.Router();

router.post("/create", FromBuilderController.createFromBuilder);
router.get("/", FromBuilderController.getAllFromBuilder);

export const FromBuilderRouter = router;
