<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
    <Footer />
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Footer from '@/components/Footer.vue';

export default defineComponent({
  name: 'App',
  components: { Footer },
  data() {
    return {}
  },
})
</script>
