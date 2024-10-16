import { initializeApp } from "firebase/app"
import { getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBzukkKnwE3JNr4RdU-f56ukSM71hmeFBM",
    authDomain: "week7-yuzhongzhao.firebaseapp.com",
    projectId: "week7-yuzhongzhao",
    storageBucket: "week7-yuzhongzhao.appspot.com",
    messagingSenderId: "546619547760",
    appId: "1:546619547760:web:da3559440a2174ea8694b5"
  };
  
// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore()
export default db