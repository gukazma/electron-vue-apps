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
     <h1>Tailwindcss apps</h1>
     <ul>
        <li> <router-link to="/tailwindcss/firstapp">First app</router-link> </li>
    </ul>
  </div>
</template>