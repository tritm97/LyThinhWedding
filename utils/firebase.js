import { getDatabase } from "firebase/database";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDyeG789elIotE9FbDdfhFnxevpJV6pU8Q",
  authDomain: "lythinh-wedding.firebaseapp.com",
  databaseURL:
    "https://lythinh-wedding-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "lythinh-wedding",
  storageBucket: "lythinh-wedding.appspot.com",
  messagingSenderId: "973231423097",
  appId: "1:973231423097:web:7d8dd9320ee0a6ba2f1ea8",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
