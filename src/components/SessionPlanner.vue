<script lang="ts">
import SessionPlannerColorInput from "./SessionPlannerColorInput.vue";
export default {
    name: "SessionPlanner",
    props: ['session', 'opts'],
    components: { SessionPlannerColorInput },
    methods: {
      addHat() {
        
      }
    }
}
</script>

<template>
  <div v-for="hat in session">
    <SessionPlannerColorInput :colorId="hat.id" :minutes="hat.minutes" :opts="opts" />
  </div>
  <button @click="addHat">Add new hat</button>
</template>