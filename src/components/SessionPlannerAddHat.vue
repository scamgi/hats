<script lang="ts">
import { opts } from '@/assets/hatsList';
import { defineComponent } from 'vue';

export default defineComponent({
  name: "SessionPlannerAddHat",
  data() {
    return {
      opts: [{id:0, name:''}],
      hatId: 5,
      minutes: null,
      prompt: ''
    };
  },
  created() {
    this.opts = opts;
  },
  emits: ['add-session-item','cancel'],
  methods: {
    resetValues() {
      this.hatId = 5;
      this.minutes = null;
      this.prompt = '';
    },
    cancel(e: Event) {
      e.preventDefault();

      this.resetValues();
      this.$emit('cancel');
    },
    save(e: Event) {
      e.preventDefault();

      const newSessionItem = {
        hatId: this.hatId,
        minutes: this.minutes,
        prompt: this.prompt
      };

      // console.log(newSessionItem);
      this.resetValues();
      this.$emit('add-session-item', newSessionItem);
    }
  }
})
</script>

<template>
  <div class="session-item">
    <div class="row">

      <div class="six columns">
        <label>Hat color</label>
        <select class="u-full-width" v-model="hatId">
          <option disabled value="">Tell me the hat color!</option>
          <option v-for="option in opts" :value="option.id">
            {{ option.name }}
          </option>
        </select>
      </div>
      
      <div class="six columns">
        <label>Minutes</label>
        <input type="number" v-model="minutes" class="u-full-width" placeholder="Tell me how long it will take (min).">
      </div>

    </div>

    <div>
      <label>Prompt</label>
      <textarea v-model="prompt" placeholder="Type here the prompt of your hat." class="u-full-width"></textarea>
    </div>

    <button @click="save">Save me!</button>
    <button @click="cancel">Cancel</button>
  </div>
</template>

<style scoped>
.session-item {
  margin-bottom: 10px;
}
</style>