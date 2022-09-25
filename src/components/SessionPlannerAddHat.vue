<script lang="ts">
import { opts } from "@/assets/hatsList";
import { defineComponent } from "vue";

export default defineComponent({
  name: "SessionPlannerAddHat",
  data() {
    return {
      opts: [{ id: 0, name: "" }],
      hatId: 5,
      minutes: null,
      prompt: "",
    };
  },
  created() {
    this.opts = opts;
  },
  emits: ["add-session-item", "cancel"],
  methods: {
    resetValues() {
      this.hatId = 5;
      this.minutes = null;
      this.prompt = "";
    },
    cancel(e: Event) {
      e.preventDefault();

      this.resetValues();
      this.$emit("cancel");
    },
    save(e: Event) {
      e.preventDefault();

      const newSessionItem = {
        hatId: this.hatId,
        minutes: this.minutes,
        prompt: this.prompt,
      };

      // console.log(newSessionItem);
      this.resetValues();
      this.$emit("add-session-item", newSessionItem);
    },
  },
});
</script>

<template>
  <div class="session-item">
    <v-row>
      <v-col>
        <v-select
          v-model="hatId"
          label="Hat color"
          :items="opts"
          item-title="name"
          item-value="id"
          single-line
        ></v-select>
      </v-col>

      <v-col>
        <v-text-field
          type="number"
          v-model="minutes"
          label="Minutes"
          single-line
          hide-details
        />
      </v-col>
    </v-row>

    <div>
      <v-textarea label="Prompt" v-model="prompt"></v-textarea>
    </div>

    <v-btn @click="save">Save me!</v-btn>
    <v-btn @click="cancel">Cancel</v-btn>
  </div>
</template>
