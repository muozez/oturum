import Attendees from '../models/Attendees.model';
import Users from '../models/Users.model';
import Sessions from '../models/Sessions.model';
import { Types } from 'mongoose';

interface attendeeData {
    sessionId: Types.ObjectId;
    userId: Types.ObjectId;
    checkInMethod: string;
    sessionOrder: number;

}

export const verifyScanService = async (data: attendeeData) => {
    const session = await Sessions.findOne({sessionOrder: data.sessionOrder});
    if(!session) throw new Error('Invalid token')
    const user = await Users.findOne({_id: data.userId})
    if(!user) throw new Error('User not found');
    return await Attendees.create({
        sessionId: user._id,
        userId: user._id,
        checkInMethod: data.checkInMethod
    })
}