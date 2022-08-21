<script setup lang="ts">
import SessionPlanner from "../components/SessionPlanner.vue";
import SessionDisplay from "../components/SessionDisplay.vue";
import { hatsList } from "@/assets/hatsList";
</script>

<script lang="ts">
export default {
  name: "MakeSession",
  data() {
    return {
      session: [{}],
    }
  },
  created() {
    this.session = hatsList;
    this.session[0].minutes = 5;
  }
}
</script>

<template>
  <SessionPlanner :session="session" />
  <SessionDisplay :session="session" />
</template>
