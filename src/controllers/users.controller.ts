import { Request, ResponseToolkit, ResponseObject } from '@hapi/hapi';
import User from './../models/User'

export default class UsersController {

    public createUser = async (req: Request, h: ResponseToolkit): Promise<ResponseObject> => {
        try {
            const user = new User(req.payload);
            const userSaved = await user.save();
            return h.response(userSaved);
        } catch (error) {
            return h.response(error).code(500);
        }
    }

    public getUsers = async (req: Request, h: ResponseToolkit): Promise<ResponseObject> => {
        try {
            const users = await User.find();
            return h.response(users);
        } catch (error) {
            return h.response(error).code(500);
        }        
    }

    public getUser = async (req: Request, h: ResponseToolkit): Promise<ResponseObject> => {
        const { id } = req.params;        
        try {
            const userFound = await User.findById(id);
            console.log('userFound: ', userFound);
            if(userFound) {
                return h.response(userFound);
            }
            
            return h.response().code(404);
            
        } catch (error) {
            console.log('errorrrrrrr');
            return h.response(error).code(500);
        }   
    }

    public updateUser = async (req: Request, h: ResponseToolkit): Promise<ResponseObject> => {
        const id: string = req.params.id;
        const payload: Object = req.payload;
        
        try {
            const updatedUser = await User.findByIdAndUpdate(id, payload, {new: true});
            console.log('updatedUser: ', updatedUser);
            if(updatedUser) {
                return h.response(updatedUser);
            }
            
            return h.response().code(404);
            
        } catch (error) {
            console.log('errorrrrrrr');
            return h.response(error).code(500);
        } 
    }

    public deleteUser = async (req: Request, h: ResponseToolkit): Promise<ResponseObject> => {
        const { id } = req.params;        
        try {
            const deletedUser = await User.findByIdAndDelete(id);
            console.log('deletedUser: ', deletedUser);
            if(deletedUser) {
                return h.response(deletedUser);
            }
            
            return h.response().code(404);
            
        } catch (error) {
            console.log('errorrrrrrr');
            return h.response(error).code(500);
        }   
    }

}