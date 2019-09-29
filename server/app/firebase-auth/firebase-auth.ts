import AppFirebaseAdminSDK from '../firebase-sdk/firebase-sdk';

class FirebaseAuth {

    static verifyIdToken(idToken: string) {

        AppFirebaseAdminSDK.defaultApp.auth().verifyIdToken(idToken)
        .then(function(decodedToken) {
          let uid = decodedToken.uid;
          console.log(uid)
        }).catch(function(error) {
          console.log(error)
        });
        
    }

}

export = FirebaseAuth