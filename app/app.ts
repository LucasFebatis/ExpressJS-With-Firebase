import express from 'express';
import AuthRouter from './router-units/auth/auth';

class App {
  
  // Create a new express application instance
  static app: express.Application = express();

  static main() {

    this.initServe()
    this.registerRouterUnits()

  }

  static registerRouterUnits() {
    
    AuthRouter.registerAuthEndPoints(this.app)

  }

  static initServe() {

    this.app.get('/', (req, res) => {
      res.send('Hello World!');
    });
    
    this.app.listen(3000, () => {
      console.log('Example app listening on port 3000!');
    });

  }

}

// Iniciando App
App.main()