import mongoose from "mongoose";
const { Schema } = mongoose;

const AttendeesSchema = new Schema({
    sessionId: {type: Schema.Types.ObjectId, ref: 'Sessions', required: true},
    userId: {type: Schema.Types.ObjectId, ref: 'Users', required: true},
    checkinTime: { type: Date, default: Date.now },
    checkInMethod: {
        type: String,
        enum: ['token', 'phone_fallback'],
        required: true
    }
})

export default mongoose.model("Attendees", AttendeesSchema)