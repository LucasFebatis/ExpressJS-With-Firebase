import * as admin from 'firebase-admin';

// SDK Admin Credencials
import * as jsonServiceAccount from './serviceAccountKey.json';

class AppFirebaseAdminSDK {

    private static serviceAccount: admin.ServiceAccount
    static defaultApp: admin.app.App

    static initFirebaseApp() {

        this.serviceAccount = jsonServiceAccount as admin.ServiceAccount

        this.defaultApp = admin.initializeApp({
            credential: admin.credential.cert(this.serviceAccount),
            databaseURL: "<>"
        });

    }

}

export = AppFirebaseAdminSDK