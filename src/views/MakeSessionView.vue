<script setup lang="ts">
import SessionPlanner from "../components/SessionPlanner.vue";
import SessionReport from "../components/SessionReport.vue";
import type { SessionItem } from "@/assets/hatsList";
import { defineComponent } from "vue";
</script>

<script lang="ts">
import _ from 'lodash';

function generateId() {
  return Math.floor(Math.random()*1000000);
}

export default defineComponent({
  name: "MakeSession",
  components: { SessionPlanner, SessionReport },
  data() {
    return {
      session: [{id:0}],
    }
  },
  methods: {
    addSessionItem(newSessionItem: SessionItem) {
      let newId = 0;
      do {
        newId = generateId();
      } while (!this.isIdUnique(newId));
      newSessionItem.id = newId;
      this.session = [...this.session, newSessionItem];
    },
    deleteSessionItem(itemId: number) {
      _.remove(this.session, item => item.id == itemId);
    },
    isIdUnique(id: number) {
      _.each(this.session, item => {
        if (item.id == id)
          return false;
      });
      return true;
    }
  },
  created() {
    let s: SessionItem[] = [
      {
        id: 0,
        hatId: 0,
        minutes: 10,
        prompt: 'Cosa sai?'
      },
      {
        id: 1,
        hatId: 1,
        minutes: 5,
        prompt: ''
      },
      {
        id: 2,
        hatId: 2,
        minutes: 5,
        prompt: 'Come potrebbe andare male questa soluzione?'
      },
    ];
    this.session = s;
  }
});
</script>

<template>
  <SessionPlanner :session="session" @add-session-item="addSessionItem" @delete-session-item="deleteSessionItem" />
  <SessionReport :session="session" />
  {{session}}
</template>
