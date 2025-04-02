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
     <h1>Bootstrap apps</h1>
     <ul>
        <li> <router-link to="/bootstrap/first">Containers</router-link> </li>
    </ul>
  </div>
</template>