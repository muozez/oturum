import mongoose from "mongoose";
import { required } from "zod/v4/core/util.cjs";
const { Schema } = mongoose;

const SessionsSchema = new Schema({
    sessionId: Number,
    title: {type: String, required: true},
    speaker: String,
    description: String,
    startTime: { type: Date, required: true},
    endTime: { type: Date, required: true },
    hallName: String,
    isCheckinActive: {type: Boolean, default: false}
});

export default mongoose.model("Sessions", SessionsSchema);