<script lang="ts">
import SessionPlannerLine from "./SessionPlannerLine.vue";
import SessionPlannerAddHat from "./SessionPlannerAddHat.vue";
import type { SessionItem } from "@/assets/hatsList";
export default {
  name: "SessionPlanner",
  data() {
    return {
      showAddHatComponent: false
    }
  },
  props: ["session"],
  emits: ['add-session-item'],
  methods: {
    addSessionItem(sessionItem: SessionItem) {
      this.toggle();
      this.$emit('add-session-item', sessionItem);
    },
    toggle() {
      this.showAddHatComponent = !this.showAddHatComponent;
    },
    toggleBtn(e: Event) {
      e.preventDefault();
      this.toggle();
    },
    cancelNewItem() {
      this.toggle();
    }
  },
  components: { SessionPlannerLine, SessionPlannerAddHat }
}
</script>

<template>
  <div v-for="item in session">
    <SessionPlannerLine :hatId="item.hatId" :minutes="item.minutes" :prompt="item.prompt" />
  </div>
  <SessionPlannerAddHat :style="{display: showAddHatComponent ? 'block' : 'none'}" @add-session-item="addSessionItem" @cancel="cancelNewItem" />
  <button :style="{display: showAddHatComponent ? 'none' : 'inline-block'}" @click="toggleBtn">Add new hat</button>
</template>