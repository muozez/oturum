import mongoose from 'mongoose';
const { Schema } = mongoose;

const UsersSchema = new Schema({
    name: String,
    surName: String,
    deviceToken: String,
    registeredAt: { type: Date, default: Date.now },
    metadata: {
        department: String,
        grade: String,
    }
});

export default mongoose.models.Users || mongoose.model("Users", UsersSchema);
