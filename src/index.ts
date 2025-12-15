import express from 'express';
import { ENV } from './config/dotenv';
import { connectDB } from './config/db';
import attendeeRoutes from './routes/user.route'
import stageRoute from './routes/stage.route'
import { errorHandler } from './middleware/errorhandler';
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use('/', attendeeRoutes);
app.use('/stage', stageRoute);
app.use(errorHandler);

const startServer = async () => {
    try {
        await connectDB();
        app.listen(ENV.PORT, ()=>{console.log(`Server Listen at http://localhost:${ENV.PORT}`)})
    }catch(err){
        console.log("Failed to connect DB");
        process.exit(1);
    }
}

startServer();
