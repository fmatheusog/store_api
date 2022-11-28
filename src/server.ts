import express, { Express } from 'express';
import { UserRoutes } from './routes';

class Server {
  private app: Express;

  constructor() {
    this.app = express();
    this.config();
  }

  public config() {
    this.app.use(express.json());

    // Routes
    this.app.use('/users', UserRoutes);
  }

  public start(port: string) {
    this.app.listen(port, () => {
      console.log(`Server running at port ${port}`);
    });
  }
}

export default Server;
