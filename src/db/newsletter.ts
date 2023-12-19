import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema({
  email: { type: String, required: true },
  info: {
    first_name: { type: String, required: false, select: false },
    last_name: { type: String, required: false, select: false },
  },
});

export const ContactModel = mongoose.model("Contact", ContactSchema);

export const getContacts = () => ContactModel.find();
export const deleteContact = (id: string) =>
  ContactModel.findOneAndDelete({ _id: id });
export const createContact = (values: Record<string, any>) =>
  new ContactModel(values).save().then((contact) => contact.toObject());
export const getContactByMail = (email: string) =>
  ContactModel.findOne({ email });
