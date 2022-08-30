<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
    <v-footer class="pa-0">
      <Footer />
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Footer from '@/components/Footer.vue';

export default defineComponent({
  name: 'App',
  components: {
    Footer
  },
  data () {
    return {
      //
    }
  },
})
</script>
