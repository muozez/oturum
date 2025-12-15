import Users from '../models/Users.model';
import { v4 as uuid } from 'uuid';

interface UserData {
    name: string;
    surName: string;
    email: string;
    telephone: string;
    metadata?: any;
    registrationMethod: string;
}

export const createUserService = async (data: UserData) => {
    const exists = await Users.findOne({
        $or: [{ email: data.email}, { telephone: data.telephone }]
    });

    if (exists) {
        throw new Error("Telephone number or mail address in use");
    };

    return await Users.create({
        name: data.name,
        surName: data.surName,
        email: data.email,
        telephone: data.telephone,
        deviceToken: uuid(),
        metadata: data.metadata || {},
        registrationMethod: data.registrationMethod || 'qr_scan'
    });
};