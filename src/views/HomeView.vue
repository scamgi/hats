<script lang="ts">
import { defineComponent } from "vue";
import tree from "@/assets/tree-home-page.jpeg";

export default defineComponent({
  name: "HomeView",
  data() {
    return {
      tree,
    };
  },
});
</script>

<template>
  <v-container>
    <v-row align="center">
      <v-col md="6" cols="12">
        <v-img :src="tree" contain max-height="600" />
      </v-col>
      <v-col md="6" cols="12">
        <div class="text-h1">6 thinking hats model</div>
        This is an app to brainstorm new ideas using the 6 thinking hats
        developed by Edward de Bono. To get started, select the mode you want to
        use.
      </v-col>
    </v-row>
  </v-container>
</template>
