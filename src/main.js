/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'
import VueScrollTo from "vue-scrollto";
import 'animate.css'


const app = createApp(App)

registerPlugins(app)
app.use(VueScrollTo)
app.mount('#app')
