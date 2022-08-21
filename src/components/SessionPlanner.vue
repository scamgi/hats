<script lang="ts">
import SessionPlannerLine from "./SessionPlannerLine.vue";
import SessionPlannerAddHat from "./SessionPlannerAddHat.vue";
import { createDOMCompilerError } from "@vue/compiler-dom";
import type { SessionItem } from "@/assets/hatsList";
export default {
  name: "SessionPlanner",
  props: ["session"],
  emits: ['update-session'],
  methods: {
    addSessionItem(sessionItem: SessionItem) {
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