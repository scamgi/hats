<script lang="ts">
import { hatsList } from '@/assets/hatsList';
import { defineComponent } from 'vue';
import HatIcon from './icons/HatIcon.vue';
export default defineComponent({
  name: "SessionPlannerLine",
  props: ['itemId', 'hatId', 'minutes', 'prompt'],
  emits: ['delete'],
  data() {
    return {
      hatsList: [{}]
    };
  },
  created() {
    this.hatsList = hatsList;
  },
  components: { HatIcon }
});
</script>

<template>
  <div class="session-item">
    <div class="row">
      <div class="six columns">
        <HatIcon :color="hatsList[hatId].color" /> {{ hatsList[hatId].name }}
      </div>
      <div class="six columns">{{ minutes }} minutes</div>
    </div>
    <div>{{ prompt }}</div>
    <button @click="$emit('delete', itemId)">Delete</button>
    {{itemId}}
  </div>
</template>

<style scoped>
.session-item {
  margin-bottom: 10px;
}
</style>