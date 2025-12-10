import mongoose from 'mongoose';
const { Schema } = mongoose;

const UsersSchema = new Schema({
    name: String,
    surName: String,
    email: { type: String, unique: true},
    telephone: { type: String, unique: true },
    deviceToken: String,
    registeredAt: { type: Date, default: Date.now },
    metadata: {
        department: String,
        grade: String,
    }
});

export default mongoose.model("Users", UsersSchema);
