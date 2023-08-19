import { Schema, model, models } from 'mongoose';

const noteSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
  {
    useUnifiedTopology: true,
  }
);

export default models.Note || model('Note', noteSchema);
