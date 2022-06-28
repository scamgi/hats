<script setup lang="ts">
import Hat from "../components/Hat.vue";
import BlackHatIcon from "../components/icons/BlackHatIcon.vue";
</script>

<template>
  <div class="hat">
    <Hat>
      <template #icon>
        <BlackHatIcon/>
      </template>
      <template #hat-name>
        Cappello nero
      </template>
      ecc
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