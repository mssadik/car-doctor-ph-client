// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey:import.meta.env.VITE_apiKey,
//   authDomain:import.meta.env.VITE_authDomain,
//   projectId:import.meta.env.VITE_projectId,
//   storageBucket:import.meta.env.VITE_storageBucket,
//   messagingSenderId:import.meta.env.VITE_messagingSenderId,
//   appId:import.meta.env.VITE_appId
// };

const firebaseConfig = {
  apiKey: "AIzaSyAeVJgkuOboS0nBX5hMRQ127uTTCYATmRE",
  authDomain: "car-doctor-4cf1e.firebaseapp.com",
  projectId: "car-doctor-4cf1e",
  storageBucket: "car-doctor-4cf1e.appspot.com",
  messagingSenderId: "870398370356",
  appId: "1:870398370356:web:d760448dea56ae0059e061"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;