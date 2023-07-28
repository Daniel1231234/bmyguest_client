import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAU6PNilGTzz2szp06ADK7Hq8CONmrLqWQ",
  authDomain: "bmyguest-auth.firebaseapp.com",
  projectId: "bmyguest-auth",
  storageBucket: "bmyguest-auth.appspot.com",
  messagingSenderId: "194960273393",
  appId: "1:194960273393:web:57d889decc685de90b1e50",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };
