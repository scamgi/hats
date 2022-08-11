<script lang="ts">
import SessionDisplayLine from "./SessionDisplayLine.vue";
export default {
    name: "SessionDisplay",
    props: ["session"],
    components: { SessionDisplayLine }
}
</script>

<template>
  <div v-for="hat in session">
    <SessionDisplayLine :hat="hat" />
  </div>
</template>