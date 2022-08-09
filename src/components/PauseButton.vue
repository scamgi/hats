<script lang="ts">
export default {
  name: "PauseButton",
  emit: ['pause']
}
</script>

<template>
  <button @click="$emit('pause')"><i class="fa-solid fa-pause"></i></button>
</template>