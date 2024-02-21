import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA4ujTO88RYMptWP9il91w-5pQJi1_2IYY",
  authDomain: "red-arrow-user-auth.firebaseapp.com",
  projectId: "red-arrow-user-auth",
  storageBucket: "red-arrow-user-auth.appspot.com",
  messagingSenderId: "13882138942",
  appId: "1:13882138942:web:0394e76ba44b7cdcfbcc6f",
};

export const app = initializeApp(firebaseConfig);
