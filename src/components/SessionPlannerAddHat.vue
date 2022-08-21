<script lang="ts">
import { opts } from '@/assets/hatsList';

export default {
  name: "SessionPlannerAddHat",
  data() {
    return {
      opts: [],
      hatId: 0,
      minutes: 0,
      prompt: ''
    };
  },
  created() {
    this.opts = opts;
  },
  emits: ['add-session-item'],
  methods: {
    save(e: Event) {
      e.preventDefault();

      const newSessionItem = {
        hatId: this.hatId,
        minutes: this.minutes,
        prompt: this.prompt
      };

      // console.log(newSessionItem);
      this.$emit('add-session-item', newSessionItem);

      this.hatId = 0;
      this.minutes = 0;
      this.prompt = '';
    }
  }
}
</script>

<template>
  <div class="session-item">
    <div class="row">

      <div class="six columns">
        <label>Hat color</label>
        <select class="u-full-width" v-model="hatId">
          <option v-for="option in opts" :value="option.id">
            {{ option.name }}
          </option>
        </select>
      </div>
      
      <div class="six columns">
        <label>Minutes</label>
        <input type="number" v-model="minutes" class="u-full-width">
      </div>

    </div>

    <div>
      <label>Prompt</label>
      <textarea v-model="prompt" placeholder="Type here the prompt of your hat." class="u-full-width"></textarea>
    </div>

    <button @click="save">Save me!</button>
  </div>
</template>

<style scoped>
.session-item {
  margin-bottom: 10px;
}
</style>