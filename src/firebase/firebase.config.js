import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDVqC01hN9OyNhCoS5B0npUcgBh2tko_A8",
  authDomain: "fir-react-c9e34.firebaseapp.com",
  projectId: "fir-react-c9e34",
  storageBucket: "fir-react-c9e34.appspot.com",
  messagingSenderId: "21012336449",
  appId: "1:21012336449:web:1b24f3e45811600ee29bc0"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;