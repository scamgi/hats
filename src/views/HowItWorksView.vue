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
  <div>{{hats[0].name}}</div>
</template>