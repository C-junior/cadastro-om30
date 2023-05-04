import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { makeServer } from "./server"

// Vue.config.productionTip = false

if (process.env.NODE_ENV === "development") {
  makeServer()
}

import './assets/main.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
