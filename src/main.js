import { createApp } from 'vue'
import App from '@/App.vue'
import { registerPlugins } from '@core/utils/plugins'

// MDI icons
import '@mdi/font/css/materialdesignicons.css'

// Styles
import '@core/scss/template/index.scss'
import '@layouts/styles/index.scss'

// Create vue app
const app = createApp(App)


// Register plugins
registerPlugins(app)

// Mount vue app
app.mount('#app')
