import mongoose from 'mongoose';
const { Schema } = mongoose;

const RegistrationTokenSchema = new Schema({
    token: { type: String, required: true, unique: true},
    source: { type: String, default: 'main_entrance'},
    createdAt: { type: Date, default: Date.now, expires: 30 }
})

export default mongoose.model("RegistrationToken", RegistrationTokenSchema);