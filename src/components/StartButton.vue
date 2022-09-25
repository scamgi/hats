<script lang="ts">
export default {
  name: "StartButton",
  emit: ["start"],
};
</script>

<template>
  <button @click="$emit('start')">
    <i class="fa-solid fa-play"></i>
  </button>
</template>
