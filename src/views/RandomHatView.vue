<script setup lang="ts">
import Hat from "../components/Hat.vue";
import Timer from "../components/Timer.vue";
</script>

<template>
  <div class="hat">
    <Hat hatColor="#666" hatName="Grey hat">
      <Timer />
    </Hat>
  </div>
</template>

<style scoped>
.hat {
  margin: 0;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  width: 100%;
}
</style>
