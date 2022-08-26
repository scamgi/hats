<script setup lang="ts">
import MyFooter from "./components/Footer.vue"
</script>

<template>
  <div class="container">
    <RouterView />
  </div>
  <MyFooter></MyFooter>
</template>

<style lang="scss">
// @import "material-components-web/";
@import "normalize.css";
</style>