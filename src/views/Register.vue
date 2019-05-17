<template>
  <div class="home">
    <TeamCreation />
    <TeamsOverview />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TeamCreation from '@/components/TeamCreation.vue';
import TeamsOverview from '@/components/TeamsOverview.vue';

@Component({
  components: {
    TeamsOverview,
    TeamCreation,
  },
})
export default class Register extends Vue {}
</script>
