import express from 'express';
import AppFirebaseAdminSDK from './firebase-sdk/firebase-sdk';
import AuthRouter from './router-units/auth/auth';
import MainInformationRouter from './router-units/main-information/main-information';

class App {
  
  // Create a new express application instance
  static app: express.Application = express();

  static main() {

    this.initServe()
    this.initFirebaseApp()
    this.registerRouterUnits()

  }

  static initFirebaseApp() {

    AppFirebaseAdminSDK.initFirebaseApp()

  }

  static registerRouterUnits() {
    
    AuthRouter.registerEndPoints(this.app)
    MainInformationRouter.registerEndPoints(this.app)

  }

  static initServe() {

    this.app.get('/', (req, res) => {
      res.send('Hello World!');
    });
    
    this.app.listen(3000, () => {
      console.log('Example app listening on port 3000!');
    });

    this.app.use(express.json()) // for parsing application/json
    // this.app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
    
  }

}

// Iniciando App
App.main()