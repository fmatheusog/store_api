import express, { Express } from 'express';

class Server {
  private app: Express = express();

  public start(port: string) {
    this.app.listen(port, () => {
      console.log(`Server running at port ${port}`);
    });
  }
}

export default Server;
