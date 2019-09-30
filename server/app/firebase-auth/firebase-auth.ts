import AppFirebaseAdminSDK from '../firebase-sdk/firebase-sdk';

class FirebaseAuth {

    static verifyIdToken(idToken: string) {

        return AppFirebaseAdminSDK.defaultApp.auth().verifyIdToken(idToken)
        
    }

}

export = FirebaseAuth