<script lang="ts">
import SessionPlannerLine from "./SessionPlannerLine.vue";
import SessionPlannerAddHat from "./SessionPlannerAddHat.vue";
import type { SessionItem } from "@/assets/hatsList";
import { defineComponent } from "vue";
export default defineComponent({
  name: "SessionPlanner",
  data() {
    return {
      showAddHatComponent: false,
    };
  },
  props: ["session"],
  emits: ["add-session-item", "delete-session-item", "done"],
  methods: {
    addSessionItem(sessionItem: SessionItem) {
      this.toggle();
      this.$emit("add-session-item", sessionItem);
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
      this.$emit("delete-session-item", itemId);
    },
  },
  components: { SessionPlannerLine, SessionPlannerAddHat },
});
</script>

<template>
  <div>
    <div v-for="item in session">
      <SessionPlannerLine
        :itemId="item.id"
        :hatId="item.hatId"
        :minutes="item.minutes"
        :prompt="item.prompt"
        @delete="deleteItem"
      />
    </div>
    <SessionPlannerAddHat
      v-show="showAddHatComponent"
      @add-session-item="addSessionItem"
      @cancel="cancelNewItem"
    />
    <v-btn v-show="!showAddHatComponent" @click="toggleBtn">
      Add new hat
    </v-btn>
    <v-btn
      v-show="!showAddHatComponent"
      style="margin-left: 5px"
      @click="$emit('done')"
    >
      Start game
    </v-btn>
  </div>
</template>
