import { Schema, model } from "mongoose";
import { FromBuilderModel, IFromBuilder } from "./from-builder.interface";

const FromBuilderSchema = new Schema<IFromBuilder, FromBuilderModel>(
  {
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
  },
  { timestamps: true }
);

export const FromBuilder = model<IFromBuilder, FromBuilderModel>(
  "FromBuilder",
  FromBuilderSchema
);
