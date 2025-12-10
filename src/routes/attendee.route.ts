import express from 'express';
import { ENV } from '../config/dotenv'
import { v4 as uuid } from 'uuid';
import Users from '../models/Users.model';

const route = express.Router();

route.post('/attendee/register', async(req, res)=>{
    try{
        const exists = await Users.find({
            email: req.body.email,
            telephone: req.body.telephone
        });

        if (exists) {
            return res.status(400).json({ error: "Telephone number or email address in use"});
        }

        const deviceId = uuid();
        const user = await Users.create({
            name: req.body.name,
            surName: req.body.surName,
            deviceToken: deviceId,
            metadata: req.body.metadata
        })
        return res.json(user);
    } catch(err){
        res.status(500).json({error: err});
    }
});

export default route;