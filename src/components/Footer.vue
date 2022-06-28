<script setup lang="ts">
import IconGithub from './icons/IconGithub.vue';
</script>

<template>
  <div class="footer">
    <div class="container">
      <div class="row">
        <div class="two columns">esempio</div>
        <div class="three columns">esempio</div>
        <div class="two columns">
          <IconGithub></IconGithub>
        </div>
        <div class="three columns">esempio</div>
        <div class="two columns">esempio</div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.footer {
  padding: 50px;
  border-top: 5px solid #222;
}

.row>div {
  text-align: center;
}

</style>