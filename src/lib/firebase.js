import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { user } from '$lib/stores/userStore';

const firebaseConfig = {
  apiKey: "AIzaSyCnh7tVOkW4UsvrqTEDtJPVRlryIibSb1s",
  authDomain: "harmonyhive-b4705.firebaseapp.com",
  projectId: "harmonyhive-b4705",
  storageBucket: "harmonyhive-b4705.appspot.com",
  messagingSenderId: "41274838584",
  appId: "1:41274838584:web:cdd0eb6e06deb0f0af60cd",
  measurementId: "G-E2XH6TESCR"
};

export const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Listen for authentication state changes
onAuthStateChanged(auth, (currentUser) => {
  if (currentUser) {
    user.set(currentUser); // Set the user in the Svelte store
  } else {
    user.set(null); // Clear the user state if not signed in
  }
});

export { auth };