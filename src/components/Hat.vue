<script lang="ts">
import HatIcon from "./icons/HatIcon.vue";
export default {
    name: "Hat",
    props: {
        hatColor: String,
        hatName: String
    },
    components: { HatIcon }
}
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

<style scoped>
.icon {
  float: left;
  margin-right: 1rem;
}
.details {
  float: left;
}
h5 {
  margin-bottom: 0;
}

</style>