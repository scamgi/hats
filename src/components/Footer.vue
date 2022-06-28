<script setup lang="ts">
import IconGithub from './icons/IconGithub.vue';
</script>

<template>
  <div class="footer">
    <div class="container">
      <div class="row">
        <div class="two columns">
          <router-link to="/">Home</router-link>
        </div>
        <div class="three columns">
          <router-link to="/random-hat">Random Hat</router-link>
        </div>
        <div class="two columns">
          <a href="https://github.com/scamgi/hats">
            <IconGithub></IconGithub>
          </a>
        </div>
        <div class="three columns">esempio</div>
        <div class="two columns">esempio</div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.footer {
  padding: 70px 15px;
  border-top: 2px solid #ddd;
}

.row>div {
  text-align: center;
}

</style>