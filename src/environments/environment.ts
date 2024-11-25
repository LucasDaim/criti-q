// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

//export const environment = {
  //production: false
//};
// Import the functions you need from the SDKs you need
import { FirebaseOptions, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const environment = {
  production: true,
  apiKey: "AIzaSyCFFK3aZK0P97Lpnl79ED3wv_fExCyPBZM",
  authDomain: "critiq-5572b.firebaseapp.com",
  projectId: "critiq-5572b",
  storageBucket: "critiq-5572b.firebasestorage.app",
  messagingSenderId: "721101955429",
  appId: "1:721101955429:web:c6fa915ebfae336aeb418c",
  measurementId: "G-Q8HNNNE7NS"
};

// Initialize Firebase
const app = initializeApp(environment);
const analytics = getAnalytics(app);
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
