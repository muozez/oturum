import mongoose from "mongoose";
import { ENV } from './dotenv';

export const connectDB = async () => {
    try {
        await mongoose.connect(ENV.MONGO_URL as string);
        console.log("MongoDB Connected");
    } catch(err){
        console.log(`MongoDB Connection Error: ${err}`);
        process.exit(1);
    };
};