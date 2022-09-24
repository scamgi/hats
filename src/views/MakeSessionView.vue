<script setup lang="ts">
import SessionPlanner from "../components/SessionPlanner.vue";
import SessionReport from "../components/SessionReport.vue";
import SessionGame from "@/components/SessionGame.vue";
import type { SessionItem } from "@/assets/hatsList";
import { defineComponent } from "vue";
</script>

<script lang="ts">
import _ from "lodash";

function generateId() {
  return Math.floor(Math.random() * 1000000);
}

export default defineComponent({
  name: "MakeSession",
  components: { SessionPlanner, SessionReport, SessionGame },
  data() {
    return {
      session: [{ id: 0 }],
      showPlanner: false,
      showGame: false,
      showReport: false,
    };
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
      _.remove(this.session, (item) => item.id == itemId);
    },
    isIdUnique(id: number) {
      _.each(this.session, (item) => {
        if (item.id == id) return false;
      });
      return true;
    },
    startGame() {
      this.showPlanner = false;
      this.showGame = true;
    },
    finish() {
      this.showGame = false;
      this.showReport = true;
    },
  },
  created() {
    this.session = [];
    this.showPlanner = true;
  },
});
</script>

<template>
  <v-container>
    <SessionPlanner
      :session="session"
      v-show="showPlanner"
      @add-session-item="addSessionItem"
      @delete-session-item="deleteSessionItem"
      @done="startGame"
    />
    <SessionGame
      v-show="showGame"
      :session="session"
      :sessionLength="session.length"
      @done="finish"
    />
    <SessionReport v-show="showReport" :session="session" />
    {{ session }}
    {{ showPlanner }}
    {{ showGame }}
    {{ showReport }}
  </v-container>
</template>
