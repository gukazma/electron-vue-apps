<script>
export default {
  methods: {
    goToAbout() {
      this.$router.push('/about')
    },
  },
}
</script>

<template>
  <div>
     <h1>My apps list</h1>
     <ul>
      <li> <router-link to="/cesium">Cesium</router-link> </li>
      <li> <router-link to="/bootstrap">Bootstrap</router-link> </li>
      <li> <router-link to="/elementplus">ElementPlus</router-link> </li>
      <li> <router-link to="/tailwindcss">Tailwindcss</router-link> </li>
    </ul>
  </div>
</template>