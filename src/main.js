import { createApp } from 'vue'
import App from './App.vue'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import router from "@/router";
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
import "bootstrap-icons/font/bootstrap-icons.css"
import './registerServiceWorker'

const app = createApp(App)
app.use(Quasar, quasarUserOptions, { config: {} })
app.use(router)
app.mount('#app')