import mongoose from "mongoose";

const LogSchema = new mongoose.Schema({
  type: { type: String, required: true },
  date: { type: Date, required: true },
});

export const LogModel = mongoose.model("Log", LogSchema, "logs");

export const getLogs = () => LogModel.find();
export const createLog = (values: Record<string, any>) =>
  new LogModel(values).save().then((log) => log.toObject());
export const getLogByDate = (date: string) => LogModel.findOne({ date });
export const getLogById = (id: string) => LogModel.findById(id);
