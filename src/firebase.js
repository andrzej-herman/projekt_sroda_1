import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDP6wjJ11-6QKXtI3ppNwOpw4GAtJllESk",
  authDomain: "moviecatalog-aa5bd.firebaseapp.com",
  projectId: "moviecatalog-aa5bd",
  storageBucket: "moviecatalog-aa5bd.appspot.com",
  messagingSenderId: "8772471",
  appId: "1:8772471:web:2af5fe4dffe39fd5301f72",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage = firebaseApp.storage();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export { auth, storage, googleProvider };
export default db;
