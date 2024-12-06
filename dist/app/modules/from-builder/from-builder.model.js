"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FromBuilder = void 0;
const mongoose_1 = require("mongoose");
const FromBuilderSchema = new mongoose_1.Schema({
    categorizeData: {
        section: { type: String, required: true },
        category: { type: String, required: true },
        categories: { type: [String], required: true },
        items: [
            {
                itemValue: { type: String, required: true },
                belongTo: { type: String, required: true },
            },
        ],
        point: { type: String, required: true },
    },
    clozeData: {
        section: { type: String, required: true },
        category: { type: String, required: true },
        sentence: { type: String, required: true },
        preview: { type: String, required: true },
        selectedWords: [
            {
                word: { type: String, required: true },
                gapLength: { type: Number, required: true },
            },
        ],
        point: { type: String, required: true },
    },
    comprehensionData: {
        section: { type: String, required: true },
        category: { type: String, required: true },
        point: { type: String, required: true },
        title: { type: String, required: true },
        comprehensionQuestions: [
            {
                questionNumber: { type: Number, required: true },
                type: { type: String, required: true },
                point: { type: String, required: true },
                title: { type: String, required: true },
                options: { type: [String], required: true },
            },
        ],
    },
}, { timestamps: true });
exports.FromBuilder = (0, mongoose_1.model)("FromBuilder", FromBuilderSchema);
