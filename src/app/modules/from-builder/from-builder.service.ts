import { IFromBuilder } from "./from-builder.interface";
import { FromBuilder } from "./from-builder.model";

const createFromBuilder = async (
  payload: IFromBuilder
): Promise<IFromBuilder> => {
  const result = await FromBuilder.create(payload);
  return result;
};

const getAllFromBuilder = async (): Promise<IFromBuilder[]> => {
  const result = await FromBuilder.find({});
  return result;
};

export const FromBuilderService = {
  createFromBuilder,
  getAllFromBuilder,
};
