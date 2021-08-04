import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyC5lK69C5ysRwawLeF71_X4OKDK13p1RJo",
  authDomain: "invoiceapp-3ba84.firebaseapp.com",
  projectId: "invoiceapp-3ba84",
  storageBucket: "invoiceapp-3ba84.appspot.com",
  messagingSenderId: "553116558931",
  appId: "1:553116558931:web:03060d4907e3a6d73fc8a6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();
