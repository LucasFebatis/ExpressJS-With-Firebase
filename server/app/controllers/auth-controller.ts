import FirebaseAuth from '../firebase-auth/firebase-auth'

class AuthController {

    constructor(public idToken: string) {

        this.initController()
    }

    initController() {

        FirebaseAuth.verifyIdToken(this.idToken)
            .then((decodedToken) => {
                let uid = decodedToken.uid;
                console.log(uid)
            }).catch((error) => {
                console.log(error)
            });

    }

}

export = AuthController