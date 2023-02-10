import mongoose from "mongoose";

const { Schema } = mongoose;

const doctorsSchema = new Schema(
  {
    image: { type: String, required: true },
    doctorJob: { type: String, required: true },
    doctorName: { type: String, required: true },
    star: { type: Number, required: true },
    location: { type: String, required: true },
    hour: { type: String, required: true },
    money: { type: Number, required: true },
    team: { type: String, required: true },
  },
  { timestamps: true }
);

const Doctors = mongoose.model("doctors", doctorsSchema);

export default Doctors;
