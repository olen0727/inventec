import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import VueSweetalert2 from 'vue-sweetalert2';
// import 'sweetalert2/dist/sweetalert2.min.css';

import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
createApp(App).use(router).use(VueToast).mount('#app')
