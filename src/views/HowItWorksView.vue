<script lang="ts">
import hats from '@/assets/hats';
import Hat from '../components/Hat.vue';

export default {
    name: "HowItWorks",
    data() {
        return {
            hats: null
        };
    },
    created() {
        this.hats = hats;
    },
    components: { Hat }
}
</script>

<template>
  <Hat v-for="hat in hats" :hatName="hat.name + ' - ' + hat.description" :hatColor="hat.color">
    <ul>
      <li v-for="quote in hat.quotes">{{quote}}</li>
    </ul>
  </Hat>
</template>