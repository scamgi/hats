<script lang="ts">
export default {
  name: "PauseButton",
  emit: ['pause']
}
</script>

<template>
  <button @click="$emit('pause')">Pause</button>
</template>