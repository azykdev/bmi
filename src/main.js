import { createApp } from 'vue'
import App from '@/App.vue'
import { registerPlugins } from '@core/utils/plugins'
import '@mdi/font/css/materialdesignicons.css'
import '@core/scss/template/index.scss'
import '@layouts/styles/index.scss'
import '@/plugins/tailwind/tailwind.css'
import store from './store'

// Create vue app
const app = createApp(App)

registerPlugins(app)
app.use(store)
app.mount('#app')
