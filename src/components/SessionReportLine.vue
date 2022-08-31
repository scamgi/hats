<script lang="ts">
import { hatsList } from "@/assets/hatsList";

export default {
  name: "SessionReportLine",
  props: ["item"],
  data() {
    return {
      hatsList: hatsList,
    };
  },
};
</script>

<template>
  <i :style="{ color: hatsList[item.hatId].color }">{{
    hatsList[item.hatId].name
  }}</i
  >, {{ item.minutes }} m.<br />
  &emsp; {{ item.prompt || "[vuoto]" }}<br />
</template>
