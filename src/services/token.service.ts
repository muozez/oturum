import { v4 as uuid } from 'uuid';
import RegistrationToken from '../models/RegistrationToken.model';

export const createTokenService = async(url: string) => {
    const uniqueCode = uuid();
    await RegistrationToken.create({
        token: uniqueCode
    });
    const qUrl = url+`/register?ref=${uniqueCode}`
    return qUrl
};