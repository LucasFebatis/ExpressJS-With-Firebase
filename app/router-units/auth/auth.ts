import express from 'express';

class AuthRouter {

    static registerAuthEndPoints(app: express.Application) {

        app.post('/login', (req, res) => {
            res.send('Hello World! 6355');
        });

    }

}

export = AuthRouter