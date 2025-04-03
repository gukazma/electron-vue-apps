// import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
// import 'bootstrap/dist/css/bootstrap.min.css';
import router from './router'
import './assets/styles.scss'
import VueCesium from 'vue-cesium'
import 'vue-cesium/dist/index.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.use(VueCesium, {
    cesiumPath: '/Cesium/Cesium.js'
  })
app.mount('#app')