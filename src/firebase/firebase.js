import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBlBXrW0lqeAeOio4El1hIYOm7wlTJ0UWY",
  authDomain: "hackathon-650c8.firebaseapp.com",
  databaseURL: "https://hackathon-650c8-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "hackathon-650c8",
  storageBucket: "hackathon-650c8.appspot.com",
  messagingSenderId: "479454165902",
  appId: "1:479454165902:web:9c380782a3f75cc70a82df"
}
const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)