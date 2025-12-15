    import mongoose from 'mongoose';
import { lowercase } from 'zod';
import { required } from 'zod/v4/core/util.cjs';
    const { Schema } = mongoose;

    const UsersSchema = new Schema({
        name: {type: String, required: true},
        surName: {type: String, required: true},
        email: { type: String, unique: true, lowercase: true, trim: true},
        telephone: { type: String, unique: true, required: true, index: true},
        deviceToken: String,
        registeredAt: { type: Date, default: Date.now },
        metadata: {
            department: String,
            grade: String,
        },
        registrationMethod: {
            type: String,
            enum: ['qr_scan', 'manual_admin'],
            default: 'qr_scan'
        }
    }, { timestamps: true });

    export default mongoose.model("Users", UsersSchema);
