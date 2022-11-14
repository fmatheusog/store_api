import Server from './server';
import * as dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.APP_PORT || '3000';

const server = new Server();

server.start(PORT);
