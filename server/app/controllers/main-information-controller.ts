import FirebaseAuth from '../firebase-auth/firebase-auth'
import FirebaseFirestore from '../firebase-firestore/firebase-firestore'

class MainInformationController {

    constructor(public idToken: string) {
        
        this.initController()
    }

    initController() {
        FirebaseAuth.verifyIdToken(this.idToken)
            .then((decodedToken) => {
                let uid = decodedToken.uid;

                let data = {
                    name: 'Los Angeles',
                    state: 'CA',
                    country: 'USA'
                  };
                  
                  // Add a new document in collection "cities" with ID 'LA'
                  let db = FirebaseFirestore.getDBInstance()
                  let setDoc = db.collection('cities').doc('LA').set(data);
                
            }).catch((error) => {
                console.log(error)
            });
    }

}

export = MainInformationController