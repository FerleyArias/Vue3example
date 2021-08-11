import { createApp } from 'vue'
import titleMixin from './mixins/titleMixin'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).mixin(titleMixin).mount('#app')