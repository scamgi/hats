<!-- <script setup lang="ts">
import TheWelcome from "@/components/TheWelcome.vue";
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>
 -->

<template>
  <div class="welcome">
    <h1>Welcome!</h1>
    <div class="row">
      <div class="three columns">
        <router-link to="/" class="button">Home</router-link>
      </div>
      <div class="three columns">
        <router-link to="/random-hat" class="button">Random Hat</router-link>
      </div>
      <div class="three columns">
        <a href="#" class="button">esempio</a>
      </div>
      <div class="three columns">
        <a href="#" class="button">esempio</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.welcome {
  margin: 0;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  width: 100%;
}
</style>