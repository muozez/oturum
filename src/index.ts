import express from 'express';
import { ENV } from './config/dotenv';
import { connectDB } from './config/db';
import attendeeRoutes from './routes/attendee.route'
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use('/', attendeeRoutes);

app.use('/', async (req, res)=>{
    try {
        res.status(200);
        res.json({message: "200"})
    }
   catch(err){
        res.status(404).json({message: "Pooling Error"})
   } 
});

connectDB();


app.listen(ENV.PORT, ()=> console.log(`Listening at ${ENV.PORT}`))