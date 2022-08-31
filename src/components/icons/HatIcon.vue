<script lang="ts">
export default {
  name: "HatIcon",
  props: {
    color: String,
  },
};
</script>

<template>
  <i class="fa-brands fa-redhat" :style="{ color: color }"></i>
</template>
