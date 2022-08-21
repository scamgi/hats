<script lang="ts">
import { opts } from '@/assets/hatsList';

export default {
  name: "SessionPlannerColorInput",
  props: ['colorId', 'minutes'],
  data() {
    return {
      opts: []
    };
  },
  created() {
    this.opts = opts;
  }
  // data() {
  //   return {
  // colorId: 0,
  // colorOptions: [
  //   { name: 'White', id: 0 },
  //   { name: 'Yellow', id: 1 },
  // ],
  // minutes: 5
  // }
  // },
}
</script> 

<template>
  <div class="six columns">
    <label>Hat color</label>
    <select class="u-full-width" v-model="colorId">
      <option v-for="option in opts" :value="option.id">
        {{ option.name }}
      </option>
    </select>
  </div>
  <div class="six columns">
    <label>Minutes for this hat</label>
    <input type="number" placeholder="0" v-model="minutes" class="u-full-width" />
    <!-- <select class="u-full-width">
        <option value="Option 1">Questions</option>
        <option value="Option 2">Admiration</option>
        <option value="Option 3">Can I get your number?</option>
      </select> -->
  </div>
</template>