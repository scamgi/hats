<script lang="ts">
import hats from '@/assets/hats';

export default {
  name: 'HowItWorks',
  data() {
    return {
      hats: null
    }
  },
  created() {
    this.hats = hats;
  }
}
</script>

<template>
  <div v-for="hat in hats">
    <h5>{{hat.name}} - {{hat.description}}</h5>
    <ul>
      <li v-for="quote in hat.quotes">{{quote}}</li>
    </ul>
  </div>
</template>