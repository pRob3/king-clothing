import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAZK5bjItgud9hXUX41fYZe0r7Xma3fzic',
  authDomain: 'king-clothing-db-e01ed.firebaseapp.com',
  projectId: 'king-clothing-db-e01ed',
  storageBucket: 'king-clothing-db-e01ed.appspot.com',
  messagingSenderId: '450273390410',
  appId: '1:450273390410:web:1efeeede6e2a5858fd1bb3',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createuserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  console.log(userDocRef);

  const userDocSnapshot = await getDoc(userDocRef);
  console.log(userDocSnapshot);

  // if user does not exist in db, create it
  if (!userDocSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log('Error creating user', error.message);
    }
  }

  // user exists in db
  return userDocRef;
};
