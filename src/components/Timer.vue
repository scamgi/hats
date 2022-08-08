<script lang="ts">
export default {
  name: "Timer",
  data() {
    return {
      seconds: 0,
      interval: null
    }
  },
  created() {
    this.interval = setInterval(() => this.seconds++, 1000);
  },
}
</script>

<template>
  {{seconds}} s.
</template>

<style>
</style>