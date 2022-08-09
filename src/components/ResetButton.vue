<script lang="ts">
export default {
  name: "ResetButton",
  emit: ['reset']
}
</script>

<template>
  <button @click="$emit('reset')">Reset</button>
</template>