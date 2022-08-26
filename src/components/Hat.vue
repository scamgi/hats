<script lang="ts">
import { defineComponent } from "vue";
import HatIcon from "./icons/HatIcon.vue";
export default defineComponent({
    name: "Hat",
    props: {
        hatColor: String,
        hatName: String
    },
    components: { HatIcon }
});
</script>

<template>
  <div class="clearfix">
    <div class="icon">
      <h3><HatIcon :color="hatColor"/></h3>
    </div>
    <div class="details">
      <h3>{{hatName}}</h3>
      <slot></slot>
    </div>
  </div>
</template>
