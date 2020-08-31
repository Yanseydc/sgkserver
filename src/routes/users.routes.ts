import { Server } from '@hapi/hapi';
import Joi from '@hapi/joi'; 
import UsersController from './../controllers/users.controller';

export default class Routes {    

    private usersController: UsersController = new UsersController();

    constructor(server: Server) {        
        this.configureRoutes(server);
    }

    private configureRoutes = (server: Server) => { 
        server.route({
            method: 'POST',
            path: '/users',
            handler: this.usersController.createUser
        });

        server.route({
            method: 'GET',
            path: '/users',
            handler: this.usersController.getUsers
        });
    
        server.route({
            method: 'GET',
            path: '/users/{id}',
            handler: this.usersController.getUser
        });

        server.route({
            method: 'PUT',
            path: '/users/{id}',
            handler: this.usersController.updateUser
        });
    
        server.route({
            method: 'DELETE',
            path: '/users/{id}',
            handler: this.usersController.deleteUser
        });
    }

}
