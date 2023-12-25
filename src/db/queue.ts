import mongoose from "mongoose";

const JobSchema = new mongoose.Schema({
  createdAt: { type: Date, required: true },
  email: {
    type: { type: String, required: true },
    information: {
      address: { type: String, required: true },
      first_name: { type: String, required: false },
      last_name: { type: String, required: false },
    },
    content: {
      html: { type: String, required: true },
      subject: { type: String, required: true },
    },
  },
});

export const JobModel = mongoose.model("Job", JobSchema, "queue");

export const getJobs = () => JobModel.find();
export const deleteJob = (id: string) => JobModel.findOneAndDelete({ _id: id });
export const createJob = (values: Record<string, any>) =>
  new JobModel(values).save().then((job) => job.toObject());
export const getJobById = (id: string) => JobModel.findById(id);
