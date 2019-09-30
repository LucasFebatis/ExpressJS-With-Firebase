import express from 'express';
import MainInformationController from '../../controllers/main-information-controller'

class MainInformationRouter {

    static registerEndPoints(app: express.Application) {

        app.get('/main-information', (req, res) => {

            var idToken = req.body.idToken
            var mainInformationController = new MainInformationController(idToken)

            res.send('Hello World! 2222');
        });

    }

}

export = MainInformationRouter