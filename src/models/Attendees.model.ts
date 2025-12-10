import mongoose from "mongoose";
const { Schema } = mongoose;

const AttendeesSchema = new Schema({
    sessionId: Number,
    userId: String,
    checkinTime: { type: Date }
})

export default mongoose.model("Attendees", AttendeesSchema)