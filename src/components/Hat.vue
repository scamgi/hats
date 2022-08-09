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
      <h3>
        <HatIcon :color="hatColor"/>
      </h3>
    </div>
    <div class="details">
      <h3 :style="{color:hatColor}">{{hatName}}</h3>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.icon {
  float: left;
  margin-right: 5px;
}
.details {
  float: left;
}
h5 {
  margin-bottom: 0;
}
.clearfix:after {
  visibility: hidden;
  display: block;
  font-size: 0;
  content: " ";
  clear: both;
  height: 0;
}
* html .clearfix             { zoom: 1; } /* IE6 */
*:first-child+html .clearfix { zoom: 1; } /* IE7 */

</style>