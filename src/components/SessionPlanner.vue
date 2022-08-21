<script lang="ts">
import SessionPlannerLine from "./SessionPlannerLine.vue";
import SessionPlannerAddHat from "./SessionPlannerAddHat.vue";
import { createDOMCompilerError } from "@vue/compiler-dom";
export default {
  name: "SessionPlanner",
  props: ["session"],
  methods: {
    addSessionItem(sessionItem) {
      this.$emit('update-session', sessionItem);
    }
  },
  components: { SessionPlannerLine, SessionPlannerAddHat }
}
</script>

<template>
  <div v-for="item in session">
    <SessionPlannerLine :hatId="item.hatId" :minutes="item.minutes" :prompt="item.prompt" />
  </div>
  <SessionPlannerAddHat @add-session-item="addSessionItem" />
  <!-- <button @click="addItem">Add new hat</button> -->
</template>