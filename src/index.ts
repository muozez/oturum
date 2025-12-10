import express from 'express';
import { ENV } from './config/dotenv';
import { connectDB } from './config/db';
import attendeeRoutes from './routes/attendee.route'
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use('/', attendeeRoutes);

connectDB();


app.listen(ENV.PORT, ()=> console.log(`Listening at http://localhost:${ENV.PORT}`))