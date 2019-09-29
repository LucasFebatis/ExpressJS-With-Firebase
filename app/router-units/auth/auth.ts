import express from 'express';

class AuthRouter {

    static registerAuthEndPoints(app: express.Application) {

        app.get('/auth', function (req, res) {
            res.send('Hello World! 6355');
        });

        app.get('/auth/3', function (req, res) {
            res.send('Hello World! 777');
        });

    }

}

export = AuthRouter