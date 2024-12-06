"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FromBuilderRouter = void 0;
const express_1 = __importDefault(require("express"));
const from_builder_controller_1 = require("./from-builder.controller");
const router = express_1.default.Router();
router.post("/create", from_builder_controller_1.FromBuilderController.createFromBuilder);
router.get("/", from_builder_controller_1.FromBuilderController.getAllFromBuilder);
exports.FromBuilderRouter = router;
