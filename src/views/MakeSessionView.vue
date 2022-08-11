<script setup lang="ts">
import SessionPlanner from "../components/SessionPlanner.vue";
import SessionDisplay from "../components/SessionDisplay.vue";
</script>

<script lang="ts">
export default {
  name: "MakeSession"
}
</script>

<template>
  <SessionPlanner />
  <SessionDisplay />
</template>
