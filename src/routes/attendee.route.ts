import express from 'express';
import { ENV } from '../config/dotenv'
import Users from '../models/Users.model';
import jwt from 'jsonwebtoken';

const route = express.Router();


const createToken = (deviceId: string) => {
    return jwt.sign({ deviceId }, ENV.JWT_SECRET!, {
        expiresIn: "1d",
    });
};

route.post('/attendee/register', async(req, res)=>{
    try{
        const token = createToken(req.body.deviceId)
        const user = await Users.create({
            name: req.body.name,
            surName: req.body.surName,
            deviceToken: token,
            metadata: {
                department: req.body.department,
                grade: req.body.grade
            }})
        return res.json(user);
    } catch(err){
        res.status(500).json({error: err});
    }
});

export default route;