<script lang="ts">
import { defineComponent } from "vue";
import Hat from "./Hat.vue";
import SessionGameTimer from "./SessionGameTimer.vue";

export default defineComponent({
  name: "SessionGameItem",
  props: {
    hatColor: String,
    hatName: String,
    prompt: String,
    minutes: Number,
  },
  components: { Hat, SessionGameTimer },
});
</script>

<template>
  <div>
    <Hat :hatColor="hatColor" :hatName="hatName">
      {{ prompt }}
      <SessionGameTimer :minutes="minutes" />
    </Hat>
  </div>
</template>
