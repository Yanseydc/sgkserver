import { Request, ResponseToolkit } from '@hapi/hapi';

export const createUser = async (req: Request, h: ResponseToolkit) => {
    console.log(req.payload);
    return 'received';
}