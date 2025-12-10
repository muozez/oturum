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
        },
        expiryAt: { type: Date, default: Date.now() + 24*60*60*1000 }
    });

    export default mongoose.model("Users", UsersSchema);
