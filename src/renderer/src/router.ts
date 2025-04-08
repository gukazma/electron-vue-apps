import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from './components/HomeView.vue'
import AboutView from './components/AboutView.vue'
import CesiumView from './components/CesiumView.vue'
import BootstrapView from './components/BootstrapView.vue'
import TailwindcssView from './components/TailwindcssView.vue'
import TailwindcssFirstapp from './components/TailWindcss/FirstApp.vue'
import BootstrapFirst from './components/Bootstrap/Containers.vue'
import ElementPlusView from './components/ElementPlusView.vue'
import ElementPlusButton from './components/ElementPlus/Button.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
  { path: '/cesium', component: CesiumView },
  { path: '/bootstrap', component: BootstrapView },
  { path: '/tailwindcss', component: TailwindcssView },
  { path: '/tailwindcss/firstapp', component: TailwindcssFirstapp },
  { path: '/bootstrap/first', component: BootstrapFirst },
  { path: '/elementplus', component: ElementPlusView },
  { path: '/elementplus/button', component: ElementPlusButton }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router