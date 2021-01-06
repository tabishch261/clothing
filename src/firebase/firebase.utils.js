
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
  const userRef = firestore.doc(`users/${userAuth.uid}`);  // create the doc ref object

  const snapShot = await userRef.get(); // .get is used to get the sbnapshot object, using this we see that snapshop exists or not

  if (!snapShot.exists) { // if snapshot exist dont do any thing if it dosnot exist then create the new document object
    const { displayName, email } = userAuth;
    const createdAt = new Date(); // it tells us the current date and current time 
    try {
      await userRef.set({ // create the new user object if user snap shot doesnt exist in firebase - 
                            // - it like creating new user / doc with all given properties inside of our database
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


// it is used to add/set the data to the firebase database as it is hard to set the data manually
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => { // forEach method helps to loop over the objects, it does not return us a new arry 
    const newDocRef = collectionRef.doc(); // that helps to point each object to the unique id
    batch.set(newDocRef, obj); // so after looping through arr, we batch the elements together
  });

  return await batch.commit(); // it fire our batch request, it return the promise when commit succeeds 
};

// pulling the data from the firebase and store it inside our reducer which is good practise

// to get the data in the right shape that we want
export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data(); // from the actual doc data we pull off the two properties title and items that i want

    return { // actual properties that we want from our backend using collections.docs.map are given below
      routeName: encodeURI(title.toLowerCase()), // route name is read by url so it is converted into lowercase
      id: doc.id,
      title,
      items,
    };
  });
//  initial object goes into the first new collection / 1st element - it set first value e,g 1st value is hats, hats peoperty equal to the hats collections
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};



export const auth = firebase.auth();
export const firestore = firebase.firestore();
// Setting out google authentication utility
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;