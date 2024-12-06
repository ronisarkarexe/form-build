import { Model } from "mongoose";

export interface IFromBuilder {
  categorizeData: {
    section: string;
    category: string;
    categories: string[];
    items: { itemValue: string; belongTo: string }[];
    point: string;
  };
  clozeData: {
    section: string;
    category: string;
    sentence: string;
    preview: string;
    selectedWords: { word: string; gapLength: number }[];
    point: string;
  };
  comprehensionData: {
    section: string;
    category: string;
    point: string;
    title: string;
    comprehensionQuestions: {
      questionNumber: number;
      type: string;
      point: string;
      title: string;
      options: string[];
    }[];
  };
}

export type FromBuilderModel = Model<IFromBuilder, object>;
