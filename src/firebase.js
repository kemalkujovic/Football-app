import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDtDW3KIbyCN2Xr09O3wezrTrVOCF7k8-o",
  authDomain: "football-app-44724.firebaseapp.com",
  projectId: "football-app-44724",
  storageBucket: "football-app-44724.appspot.com",
  messagingSenderId: "451741009676",
  appId: "1:451741009676:web:dc4027eea4ff3645952b29",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
