import './assets/scss/style.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { initializeApp } from "firebase/app";

import App from './App.vue'
import router from './router'

const app = createApp(App)

const firebaseConfig = {
  apiKey: "AIzaSyDZyY3CFI7MtbZo1WxIm5c_ZI1xbf-6Qxs",
  authDomain: "shelter-dom-210da.firebaseapp.com",
  projectId: "shelter-dom-210da",
  storageBucket: "shelter-dom-210da.appspot.com",
  messagingSenderId: "400575680802",
  appId: "1:400575680802:web:548493b889a1709fe7957b"
};

// Initialize Firebase
initializeApp(firebaseConfig);

app.use(createPinia())
app.use(router)

app.mount('#app')
