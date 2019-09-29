import express from 'express';
import FirebaseAuth from '../../controllers/auth-controller'

class AuthRouter {

    static registerAuthEndPoints(app: express.Application) {

        app.post('/login', (req, res) => {

            var idToken = req.body.idToken
            var firebaseAuth = new FirebaseAuth(idToken)

            res.send('Hello World! 6355');
        });

    }

}

export = AuthRouter