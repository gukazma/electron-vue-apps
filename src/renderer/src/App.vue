<script setup>
</script>

<template>
  <div class="d-flex align-items-start">
    <!-- 垂直导航栏 -->
    <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
      <router-link to="/" class="nav-link" active-class="active" exact>Home</router-link>
      <router-link to="/cesium" class="nav-link" active-class="active" exact>Cesium</router-link>
      <router-link to="/bootstrap" class="nav-link" active-class="active">Bootstrap</router-link>
    </div>

    <!-- 路由内容区域 -->
    <div class="flex-grow-1">
      <router-view></router-view>
    </div>
  </div>

</template>