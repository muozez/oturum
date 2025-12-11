import SessionsModel from "../models/Sessions.model";
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