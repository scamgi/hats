<script setup lang="ts">
import SessionPlanner from "../components/SessionPlanner.vue";
import SessionDisplay from "../components/SessionDisplay.vue";
import hats from "@/assets/hats";
</script>

<script lang="ts">
export default {
  name: "MakeSession",
  data() {
    return {
      session: [{}]
    }
  },
  created() {
    // this.session = [
    //   {
    //     color: "#4361ee",
    //     name: "Blue hat",
    //     minutes: 10
    //   },
    //   {
    //     color: "#354f52",
    //     name: "Green hat",
    //     minutes: 15
    //   },
    //   {
    //     color: "#ef233c",
    //     name: "Red hat",
    //     minutes: 15
    //   },
    //   {
    //     color: '#000',
    //     name: "Black hat",
    //     minutes: 60
    //   },
    //   {
    //     color: '#fff',
    //     name: "White hat",
    //     minutes: 45
    //   },
    //   {
    //     color: '#ffb703',
    //     name: 'Yellow hat',
    //     minutes: 30
    //   }
    // ]
    this.session = hats;
  }
}
</script>

<template>
  <SessionPlanner />
  <SessionDisplay :session="session" />
</template>
