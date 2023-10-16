// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsqagBKhfxP28lvOyXXcqW9Qmf8TsJMo8",
  authDomain: "web-blog-product.firebaseapp.com",
  projectId: "web-blog-product",
  storageBucket: "web-blog-product.appspot.com",
  messagingSenderId: "349486454404",
  appId: "1:349486454404:web:39add2a152ba230831d4d1",
  measurementId: "G-SQC70HH85Y"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);

export const initFirebase = () => {
  return app;
}