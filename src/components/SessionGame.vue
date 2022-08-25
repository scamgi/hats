<script lang="ts">
import { hatsList } from '@/assets/hatsList';
import { defineComponent } from 'vue';
import SessionGameItem from './SessionGameItem.vue';

export default defineComponent({
    name: "SessionGame",
    props: ["session"],
    data() {
        return {
            hatsList: hatsList
        }
    },
    components: { SessionGameItem }
});
</script>

<template>
  <div>
    <div v-for="item in session">
        <SessionGameItem :prompt="item.prompt" :minutes="item.minutes" :hatColor="hatsList[item.hatId].color" :hatName="hatsList[item.hatId].name" />
    </div>
    <button>Next</button>
  </div>
</template>