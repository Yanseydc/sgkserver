import { Server } from '@hapi/hapi'
import { createUser } from './../controllers/users.controller'

export const routes = (server: Server) => {

    server.route({
        method: 'POST',
        path: '/users',
        handler: createUser
    })

    server.route({
        method: 'GET',
        path: '/users',
        handler: ()=>{}
    })

    server.route({
        method: 'GET',
        path: '/users/{id}',
        handler: ()=>{}
    })

    server.route({
        method: 'PUT',
        path: '/users/{id}',
        handler: ()=>{}
    })

    server.route({
        method: 'DELETE',
        path: '/users/{id}',
        handler: ()=>{}
    })


}