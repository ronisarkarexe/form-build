"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FromBuilderController = void 0;
const from_builder_service_1 = require("./from-builder.service");
const createFromBuilder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield from_builder_service_1.FromBuilderService.createFromBuilder(req.body);
    if (!result) {
        res.status(400).json({
            message: "Fail to create from!",
            success: false,
        });
    }
    res.status(200).json({
        message: "From Created Successfully!",
        success: true,
        data: result,
    });
});
const getAllFromBuilder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield from_builder_service_1.FromBuilderService.getAllFromBuilder();
    if (!result) {
        res.status(400).json({
            message: "Fail to retried",
            success: false,
        });
    }
    res.status(200).json({
        message: "Retried Successfully!",
        success: true,
        data: result,
    });
});
exports.FromBuilderController = {
    createFromBuilder,
    getAllFromBuilder
};
