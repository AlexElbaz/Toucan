import { createApp } from 'vue'
import App from './App.vue'
import VCalendar from 'v-calendar'
import router from './router'
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from './plugins/font-awesome'

createApp(App).use(router).use(VCalendar, {}).use(store).component("font-awesome-icon", FontAwesomeIcon).mount('#app')
