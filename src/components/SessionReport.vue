<script lang="ts">
import SessionReportLine from "./SessionReportLine.vue";
export default {
  name: "SessionDisplay",
  props: ["session"],
  components: { SessionReportLine },
};
</script>

<template>
  <div>
    <div v-for="item in session">
      <SessionReportLine :item="item" />
    </div>
  </div>
</template>
