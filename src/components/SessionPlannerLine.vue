<script lang="ts">
import { hatsList } from "@/assets/hatsList";
import { defineComponent } from "vue";
import HatIcon from "./icons/HatIcon.vue";
export default defineComponent({
  name: "SessionPlannerLine",
  props: ["itemId", "hatId", "minutes", "prompt"],
  emits: ["delete"],
  data() {
    return {
      hatsList: [{ color: "", name: "" }],
    };
  },
  created() {
    this.hatsList = hatsList;
  },
  components: { HatIcon },
});
</script>

<template>
  <div class="session-item">
    <v-card
      prepend-icon="mdi-redhat"
      :title="hatsList[hatId].name"
      :subtitle="minutes + ' minutes'"
      :text="prompt">
      <v-card-actions>
        <v-btn @click="$emit('delete', itemId)">Delete</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>
