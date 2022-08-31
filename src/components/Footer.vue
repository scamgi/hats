<script setup lang="ts">
import IconGithub from "./icons/IconGithub.vue";
</script>

<template>
  <div class="footer">
    <div class="container">
      <div class="row">
        <div class="two columns">
          <router-link to="/" class="footer-link">Home</router-link>
        </div>
        <div class="three columns">
          <router-link to="/random-hat" class="footer-link"
            >Random Hat</router-link
          >
        </div>
        <div class="two columns">
          <a href="https://github.com/scamgi/hats"><IconGithub></IconGithub></a>
        </div>
        <div class="three columns">
          <router-link to="/make-session" class="footer-link"
            >Make Session</router-link
          >
        </div>
        <div class="two columns">
          <router-link to="/how-it-works" class="footer-link"
            >How It Works</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.footer {
  padding: 70px 15px;
  border-top: 2px solid #ddd;
}

.row > div {
  text-align: center;
}

.footer-link {
  color: #222;
}
</style>
