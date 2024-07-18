import { initializeApp } from "firebase/app";
import {getFirestore,collection,doc,addDoc,getDocs,onSnapshot,query,serverTimestamp,orderBy,updateDoc,
  deleteDoc,} from "firebase/firestore";
import {getStorage,ref,uploadBytes,uploadBytesResumable,getDownloadURL,deleteObject,} from "firebase/storage";

import {getAuth,updateProfile} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAVVH_Wbz1P3H1d3d3ZqoCrnMwl8gWDLls",
  authDomain: "crud-firebase-c32c2.firebaseapp.com",
  projectId: "crud-firebase-c32c2",
  storageBucket: "crud-firebase-c32c2.appspot.com",
  messagingSenderId: "994894742513",
  appId: "1:994894742513:web:abd44e988231b20e34fa50"
};


export const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);


export const storage = getStorage();

export const auth = getAuth(app);

export {
  collection,
  addDoc,
  getDocs,
  onSnapshot,
  query,
  doc,
  serverTimestamp,
  orderBy,
  updateDoc,
  deleteDoc,
  ref,
  getStorage,
  uploadBytes,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject, 
  updateProfile
};