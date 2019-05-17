<template>
    <form v-show="teams.length < 16" v-on:submit.prevent="add">
        <div>
            <label for="team.name">Name your players</label>
            <input type="text" id="team.name" v-model="newTeamName" placeholder="Mich-mich">
        </div>
    </form>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class TeamCreation extends Vue {
    private newTeamName = '';

    private add() {
        this.$store.commit('addTeam', this.newTeamName);
        this.newTeamName = '';
    }

    get teams() {
        return this.$store.state.teams;
    }
}
</script>

<style scoped>
form{
    background: #FCFEFF;
    border-radius: 4px;
    box-shadow: 0 5px 20px 10px rgba(252,254,255, .2);
    display:block;
    padding: 0 20px 20px 20px;
    margin: 120px auto 10px auto;
    width: 500px;
}
form label{
    background: rgb(66,185,131);
    border-radius: 4px;
    box-shadow: 0 5px 4px -2px rgba(8, 16, 18, .2);
    font-size: 2em;
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
    padding: 10px 20px;
}
form input{
    border: 2px solid rgba(66,185,131, .5);
    border-radius: 4px;
    font-size: 18px;
    height: 30px;
    margin: 60px auto 40px auto;
    padding: 5px 10px 7px 10px;
    width: 400px
}
form input:focus{
    border: 2px solid rgb(66,185,131);
}
form input::placeholder{
    color: #c1c2bf;
}
</style>
