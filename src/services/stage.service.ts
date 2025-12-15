import Sessions from "../models/Sessions.model";
import { v4 as uuid } from 'uuid';

interface sessionData {
    sessionId: number;
    title: string;
    speaker: string;
    description: string,
    startTime: Date;
    endTime: Date;
    hallName: string;
    isCheckinActive: boolean;
    securityPin: string;
    sessionOrder: number;

}

export const createSessionService = async (data: sessionData) => {
    return await Sessions.create({
        title: data.title,
        speaker: data.speaker,
        sessionOrder: data.sessionOrder,
        description: data.description,
        startTime: new Date(data.startTime),
        endTime: new Date(data.endTime),
        hallName: data.hallName,
        isCheckinActive: data.isCheckinActive || false
    });
};

export const getSessionsService = async (id: Number) => {
    if (id){
        return await Sessions.findOne({
            _id: id
        })
    }
    return await Sessions.find();
}

export const patchSessionService = async (data: sessionData, id: Number) => {
    if (!data || !id){
        throw new Error("Request is empty");
    };
    const updated = await Sessions.findOneAndUpdate(
        {_id: id},
        data,
        { new: true }
    );
    if (!updated) throw new Error("Session not found")
    return updated;
}

export const deleteSessionService = async (id: Number) => {
    const exists = await Sessions.findOne({_id: id})
    if(!exists){
        throw new Error("not found")
    }
    const deleted = await Sessions.findOneAndDelete(
        {_id: id}
    );
    return deleted;
}