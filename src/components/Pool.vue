<template>
    <table>
        <tr v-for="(pool, index) in pools">
            <th>Poule {{index}}</th>
            <td v-for="team in pool">{{ team.name }}</td>
        </tr>
    </table>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class Pool extends Vue {
    private get pools() {
        return this.$store.state.tournament.pools;
    }
}
</script>

<style scoped>
</style>