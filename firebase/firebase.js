import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore"; 

//Please add Your own Firebase Configuration keys !!
const firebaseConfig = {
  apiKey: "AIzaSyALoDecgXf41qiRBaNBPTqfdXcAbJc213M",
  authDomain: "fir-todo-app-8bea5.firebaseapp.com",
  projectId: "fir-todo-app-8bea5",
  storageBucket: "fir-todo-app-8bea5.appspot.com",
  messagingSenderId: "96026406938",
  appId: "1:96026406938:web:39eb02b48146615a18e1a3"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app); 
