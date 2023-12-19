import mongoose from "mongoose";

const SponsorSchema = new mongoose.Schema({
  email: { type: String, required: true },
  name: { type: String, required: true },
});

export const SponsorModel = mongoose.model("Sponsor", SponsorSchema);

export const getSponsors = () => SponsorModel.find();
export const deleteSponsor = (id: string) =>
  SponsorModel.findOneAndDelete({ _id: id });
export const createSponsor = (values: Record<string, any>) =>
  new SponsorModel(values).save().then((sponsor) => sponsor.toObject());
