import FirebaseAuth from '../firebase-auth/firebase-auth'

class AuthController {

    constructor(public idToken: string) {
        
        this.initController()
    }

    initController() {
        FirebaseAuth.verifyIdToken(this.idToken)
    }

}

export = AuthController