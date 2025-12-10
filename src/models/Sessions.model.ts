import mongoose from "mongoose";
const { Schema } = mongoose;

const SessionsSchema = new Schema({
    _id: Number,
    title: String,
    speaker: String,
    startTime: { type: Date },
    endTime: { type: Date },
    isActive: Boolean,
    qrSecurityToken: String
});

export default mongoose.model("Sessions", SessionsSchema);