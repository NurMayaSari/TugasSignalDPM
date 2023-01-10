import * as firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyDykISvARAozK9Ts_YnZMUs1IkDhO6yLIc",
  authDomain: "mayadpmlab.firebaseapp.com",
  projectId: "mayadpmlab",
  storageBucket: "mayadpmlab.appspot.com",
  messagingSenderId: "79634513061",
  appId: "1:79634513061:web:9dea856ad3c9ebf2d7614c"
};


firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

export {auth}
