<script lang="ts">
export default {
  name: "ResetButton",
  emit: ["reset"],
};
</script>

<template>
  <button @click="$emit('reset')"><i class="fa-solid fa-stop"></i></button>
</template>
