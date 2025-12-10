import Sessions from "../models/Sessions.model";
import { v4 as uuid } from 'uuid';

interface sessionData {
    _id: number;
    title: string;
    speaker: string;
    startTime: Date;
    endTime: Date;
    isActive: boolean;
    qrSecurityToken: string;

}

export const createSessionService = async (data: sessionData) => {
    const exists = await Sessions.findOne({id: data._id});
    if (exists){
        throw new Error("Session id in use")
    };

    return await Sessions.create({
        _id: data._id,
        title: data.title,
        speaker: data.speaker,
        startTime: new Date(data.startTime),
        endTime: new Date(data.endTime),
        isActive: data.isActive,
        qrSecurityToken: uuid()
    });
}