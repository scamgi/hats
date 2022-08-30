<script lang="ts">
import { links } from '@/router/index';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Footer',
  data() {
    return {
      links: links
    }
  }
});
</script>

<template>
  <v-card elevation="0" rounded="0" width="100%" class="bg-secondary text-center">
    <v-card-text>
      <v-row justify="center" no-gutters>
        <v-btn v-for="link in links" variant="text" class="mx-2" rounded="xl" color="white">
          <router-link class="router-link text-white" :to="link.path">{{ link.show }}</router-link>
        </v-btn>
        <!-- <v-col class="text-center text-white mt-4" cols="12">
          {{  new Date().getFullYear()  }} — <strong>Vuetify</strong>
        </v-col> -->
      </v-row>
    </v-card-text>
    <v-divider />
    <v-card-text>
      Made with <v-icon icon="mdi-heart" /> from <a href="https://github.com/scamgi" class="router-link">@scamgi</a> -
      <a href="https://github.com/scamgi/hats" class="router-link">
        <v-icon icon="mdi-github" />
      </a>
    </v-card-text>
  </v-card>
</template>

<style scoped lang="scss">
.router-link {
  text-decoration: none;
}
</style>