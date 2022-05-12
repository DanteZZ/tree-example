import { createApp } from 'vue'
import { createStore } from 'vuex'

import store from './store'
import App from './App.vue'

createApp(App)
.use(createStore(store))
.mount('#app')