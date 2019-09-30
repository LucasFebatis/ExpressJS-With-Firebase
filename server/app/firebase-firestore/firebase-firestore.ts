import AppFirebaseAdminSDK from '../firebase-sdk/firebase-sdk';

class FirebaseFirestore {

    static getDBInstance() {

        return AppFirebaseAdminSDK.defaultApp.firestore()
        
    }

}

export = FirebaseFirestore