// import './assets/main.css'
// import '@/assets/style.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import { initializeApp } from "firebase/app"
// import DataTable from 'primevue/datatable'
// import Column from 'primevue/Column'

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


// Create Vue app
const app = createApp(App);

app.use(PrimeVue, { theme: { preset: Aura } });
app.use(router);
app.mount('#app');
