<script setup lang="ts">
import SessionPlanner from "../components/SessionPlanner.vue";
import SessionDisplay from "../components/SessionDisplay.vue";
import hatsList from "@/assets/hatsList";
</script>

<script lang="ts">
export default {
  name: "MakeSession",
  data() {
    return {
      session: [{}],
      opts: [{}]
    }
  },
  created() {
    this.session = hatsList;
    this.session[0].minutes = 5;

    this.opts = [];
    let n = hatsList.length;
    for (let i = 0; i < n; i++) {
      this.opts.push({
        name: hatsList[i].name,
        id: hatsList[i].id
      });
    }
  }
}
</script>

<template>
  <SessionPlanner :session="session" :opts="opts" />
  <SessionDisplay :session="session" />
</template>
