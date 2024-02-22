import { model, Schema, Document } from 'mongoose';
import { ContactUs } from '@interfaces/contactus.interface';

const contactSchema: Schema = new Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    message: {
      type: String,
      required: true,
    },
  });

const userModel = model<ContactUs & Document>('ContactU', contactSchema);

export default userModel;
