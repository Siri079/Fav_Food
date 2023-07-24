import {initializeApp} from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
    apiKey: "AIzaSyC0L5SKe0dmic5hvwQoEJ46l9egwg1nBWQ",
    authDomain: "fav-food-d4ba1.firebaseapp.com",
    projectId: "fav-food-d4ba1",
    storageBucket: "fav-food-d4ba1.appspot.com",
    messagingSenderId: "274974747315",
    appId: "1:274974747315:web:c4d0cfd017035b4eab1ec6",
    measurementId: "G-7C0J6N4ZPG"
  };
export const app= initializeApp(firebaseConfig); 
export const analytics = getAnalytics(app);
