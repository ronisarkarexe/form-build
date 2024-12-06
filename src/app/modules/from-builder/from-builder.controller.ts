import { Request, Response } from "express";
import { FromBuilderService } from "./from-builder.service";

const createFromBuilder = async (req: Request, res: Response) => {
  const result = await FromBuilderService.createFromBuilder(req.body);
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
};

const getAllFromBuilder = async (req: Request, res: Response) => {
  const result = await FromBuilderService.getAllFromBuilder();
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
};

export const FromBuilderController = {
  createFromBuilder,
  getAllFromBuilder
};
