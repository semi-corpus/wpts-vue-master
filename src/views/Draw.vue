<template>
  <div class="draw">
  <Pool />
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import Pool from '@/components/Pool.vue';

  @Component({
    components: {
      Pool,
    },
  })
  export default class Draw extends Vue {}
</script>