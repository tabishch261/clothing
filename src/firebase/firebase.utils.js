
import firebase from 'firebase/app';
import 'firebase/firestore'; // for databse
import 'firebase/auth'; // for authetication - we dont need to give them keyword, these import packages automatically attach to keyword


const config = {
    // to get the firebase config key
// Project Overview > Click Box > Settings >Copy  firebase config

// ALso enable the Google Authetication
// Deveop > Authentication > Enable Goodle 
    apiKey: "AIzaSyDcn8rOyUx2YwGLKt_0xR04yMVIc3bO_HE",
    authDomain: "clothing-db-7a590.firebaseapp.com",
    projectId: "clothing-db-7a590",
    storageBucket: "clothing-db-7a590.appspot.com",
    messagingSenderId: "693990619815",
    appId: "1:693990619815:web:7e3b604946d71c49673982"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return; // if userAuth dosent exist return nothing
 // how we get the snapshot
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) { // if snapshot dosnt exist 
    const { displayName, email } = userAuth;
    const createdAt = new Date(); // it tells us the current date and current time 
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();
// Setting out google authentication utility
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;