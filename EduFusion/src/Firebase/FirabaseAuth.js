import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: REACT_APP_FIREBASE_API_KEY,
  authDomain: "travel-blog-98d23.firebaseapp.com",
  projectId: "travel-blog-98d23",
  storageBucket: "travel-blog-98d23.appspot.com",
  messagingSenderId: "334638655831",
  appId: "1:334638655831:web:24ad1e3370f37f9adcf612",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export default storage;
