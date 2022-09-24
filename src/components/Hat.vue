<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Hat",
  props: {
    hatColor: String,
    hatName: String,
  },
});
</script>

<template>
  <v-card :title="hatName" prepend-icon="mdi-redhat">
    <v-card-text>
      <slot></slot>
    </v-card-text>
  </v-card>
</template>
