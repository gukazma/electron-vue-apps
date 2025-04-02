import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from './components/HomeView.vue'
import AboutView from './components/AboutView.vue'
import CesiumView from './components/CesiumView.vue'
import BootstrapView from './components/BootstrapView.vue'
import BootstrapFirst from './components/Bootstrap/Containers.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
  { path: '/cesium', component: CesiumView },
  { path: '/bootstrap', component: BootstrapView },
  { path: '/bootstrap/first', component: BootstrapFirst },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router