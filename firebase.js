//this page initializes our firebase database, using the info from our firebase console.

import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDWrkdxbFxMEwTiXZkhl1X_cnQAowjg_Oc",
    authDomain: "hockey-79f75.firebaseapp.com",
    databaseURL: "https://hockey-79f75.firebaseio.com",
    projectId: "hockey-79f75",
    storageBucket: "hockey-79f75.appspot.com",
    messagingSenderId: "893805109022",
    appId: "1:893805109022:web:56c0b3c30087592efdb30f"
  };

  //finish the initialization, exporting it as firebase, which will be referenced later on
  firebase.initializeApp(firebaseConfig);
  export default firebase;