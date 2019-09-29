import { Component } from '@angular/core'
import * as firebase from "firebase"
var provider = new firebase.auth.OAuthProvider('microsoft.com');

// Firebase Client Config
const firebaseConfig = {
  apiKey: "<>",
  authDomain: "<>",
  databaseURL: "<>",
  projectId: "<>",
  storageBucket: "<>",
  messagingSenderId: "<>",
  appId: "<>",
  measurementId: "<>"
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  email = "";
  senha = "";

  uid = "Sem valor"
  idToken = "Sem valor"

  ngOnInit() {
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    firebase.auth().getRedirectResult()
      .then(function (result) {
        // User is signed in.
        // IdP data available in result.additionalUserInfo.profile.
        // OAuth access token can also be retrieved:
        // result.credential.accessToken
        console.log(result)
      })
      .catch(function (error) {
        // Handle error.
        console.log(error)
      });

  }

  makeEntrar() {

    console.log(this.email)
    console.log(this.senha)

    firebase.auth().signInWithEmailAndPassword(this.email, this.senha)
      .then((userCredential) => {
        console.log("Show")
        console.log(userCredential)
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        console.log(error)
      });

  }

  makeMicrosoft() {

    firebase.auth().signInWithRedirect(provider);

  }

  makeVerify() {

    var self = this

    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {

        console.log(user)

        user.getIdToken(/* forceRefresh */ true).then(function (idToken) {

          console.log(idToken)
          // Send token to your backend via HTTPS
          self.idToken = idToken

        }).catch(function (error) {
          // Handle error
          console.log(error)
        });

      } else {
        // No user is signed in.
      }
    });

  }






}
