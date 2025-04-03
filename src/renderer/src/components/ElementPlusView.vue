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
     <h1>ElementPlus components</h1>
     <ul>
        <li> <router-link to="/elementplus/button">Button</router-link> </li>
    </ul>
  </div>
</template>