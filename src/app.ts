import { Server } from '@hapi/hapi';
import Routes from './routes/users.routes';

class App {           

    public init = async () => {
        const config: object = { port: 3000, host: 'localhost'}; 
        const server: Server = new Server(config);

        new Routes(server);

        try {
            await server.start();
            console.log('server running on %s', server.info.uri);
        } catch(err) {
            console.log('error starting server', err);
        }
    }
}

export default new App();
