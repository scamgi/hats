<script lang="ts">
import { hatsList } from '@/assets/hatsList';
import { defineComponent } from 'vue';
import SessionGameItem from './SessionGameItem.vue';
import _ from 'lodash';

export default defineComponent({
  name: "SessionGame",
  props: ['session', 'sessionLength'],
  emits: ['done'],
  data() {
    return {
      hatsList: hatsList,
      index: 0
    }
  },
  methods: {
    shouldIShow(id: number) {
      return this.index == _.findIndex(this.session, ['id', id]);
    },
    next(e: Event) {
      e.preventDefault();

      if (this.index + 1 >= this.sessionLength) {
        this.$emit('done');
        return;
      }
      this.index++;
    }
  },
  components: { SessionGameItem }
});
</script>

<template>
  <div>
    <div v-for="item in session">
      <SessionGameItem v-show="shouldIShow(item.id)" :prompt="item.prompt" :minutes="item.minutes" :hatColor="hatsList[item.hatId].color"
        :hatName="hatsList[item.hatId].name" />
    </div>
    <button @click="next">Next</button>
  </div>
</template>