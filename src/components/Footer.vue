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
  <v-footer class="bg-primary pa-0">
    <v-container>
      <v-row justify="center" no-gutters>
        <v-btn v-for="link in links" variant="text" class="mx-2" rounded="xl" color="white" :to="link.path">
          {{  link.show  }}
        </v-btn>
        <v-col cols="12" class="text-white text-center mt-4">
          <a href="https://github.com/scamgi/hats" class="router-link text-white">
            <v-icon icon="mdi-github" />
          </a>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<style scoped lang="scss">
.router-link {
  text-decoration: none;
}
</style>