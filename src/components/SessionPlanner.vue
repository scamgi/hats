<script lang="ts">
import SessionPlannerLine from "./SessionPlannerLine.vue";
import SessionPlannerAddHat from "./SessionPlannerAddHat.vue";
import type { SessionItem } from "@/assets/hatsList";
import { defineComponent } from "vue";
export default defineComponent ({
  name: "SessionPlanner",
  data() {
    return {
      showAddHatComponent: false
    }
  },
  props: ["session"],
  emits: ['add-session-item', 'delete-session-item', 'done'],
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
    },
    deleteItem(itemId: number) {
      this.$emit('delete-session-item', itemId);
    }
  },
  components: { SessionPlannerLine, SessionPlannerAddHat }
});
</script>

<template>
  <div v-for="item in session">
    <SessionPlannerLine :itemId="item.id" :hatId="item.hatId" :minutes="item.minutes" :prompt="item.prompt" @delete="deleteItem" />
  </div>
  <SessionPlannerAddHat :style="{display: showAddHatComponent ? 'block' : 'none'}" @add-session-item="addSessionItem" @cancel="cancelNewItem" />
  <button :style="{display: showAddHatComponent ? 'none' : 'inline-block'}" @click="toggleBtn" class="button-primary">Add new hat</button>
  <button :style="{display: showAddHatComponent ? 'none' : 'inline-block'}" style="margin-left: 5px;" @click="$emit('done')" class="button-primary">Start game</button>
</template>