<script lang="ts">
export default {
  name: "StartButton",
  emit: ['start']
}
</script>

<template>
  <button @click="$emit('start')">Start timer</button>
</template>