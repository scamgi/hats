<script lang="ts">
export default {
  name: "SessionDisplayLine",
  props: ['hat']
}
</script>

<template>
  <i :style="{color: hat.color}">{{hat.name}}</i>, {{hat.minutes}} m. {{hat.id}}<br/>
</template>