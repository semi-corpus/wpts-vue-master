<template>
  <div>
    <p class="overview-team_title">Équipe : {{ teams.length }} / 16</p>
    <button class="overview-shoot" v-on:click="draw">Tirer</button>
    <ul>
      <li v-for="(team, index) in teams">
        <span v-on:click="showForm(index)" v-show="index!==editedTeam">{{ team.name }} (#{{team.id}})</span>
        <form v-on:submit.prevent="hideForm" v-show="index===editedTeam">
          <input v-model="teams[index].name">
        </form>
        <button class="overview-remove-player"v-on:click="remove(index)">Remove</button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class TeamsOverview extends Vue {

  private editedTeam = -1;

  private get teams() {
    return this.$store.state.teams;
  }

  private showForm(index: number) {
    this.editedTeam = index;
  }

  private hideForm() {
    this.editedTeam = -1;
  }

  private remove(index: number) {
    this.$store.commit('remove', index);
    this.editedTeam = -1;
  }

  private draw() {
    this.$store.commit('draw');
    this.$router.push('draw');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

a {
  color: #42b983;
}

.overview-team_title{
  color: #FCFEFF;
  font-size: 1.6em;
  font-weight: 300;
  margin: 30px auto;
  text-align:center;
  padding:10px 0;
  width:200px;
}

ul{
  display:table;
  width:100%;
}

ul *{
  animation: swashIn .3s linear;
}

span {
  box-shadow: 0 0 4px 4px rgba(8, 16, 18, .2);
  color: #081012;
}

span, form{
  background: #FCFEFF;
  border-left: 3px solid #42b983;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  box-shadow: 2px 2px 4px 4px rgba(0,0,0,.03);
  display: inline-block;
  font-size: 1.1em;
  padding: 10px 8px;
  margin: 10px 0 10px 15px;
  text-align: left;
  text-transform: capitalize;
  vertical-align: middle;
  width:50%;
}

.overview-shoot{
  background: #42b983;
  border: 2px solid #FCFEFF;
  border-radius: 100%;
  box-shadow: 0 5px 20px 10px rgba(252,254,255, .2);
  cursor: pointer;
  font-size: 15px;
  font-weight: 400;
  height: 70px;
  letter-spacing: 1px;
  margin-bottom: 40px;
  padding: 5px 10px 5px 10px;
  vertical-align: middle;
  width: 70px;
}

.overview-shoot:hover{
  box-shadow: none;
  transform: scale(1.015);
  transition: .1s linear;
}

ul .overview-remove-player{
  background: rgb(66, 185, 131) ;
  border: 1px solid rgba(0,0,0, .07);
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  box-shadow: 0 0 4px 4px rgba(8, 16, 18, .2);
  color: white;
  cursor: pointer;
  font-size: 15px;
  height:41px;
  padding: 4px 10px;
  vertical-align: middle;
  transition: .2s linear;
}

ul .overview-remove-player:hover{
  background:#081012;
  box-shadow: none;
  padding: 5px 10px 5px 10px;
  text-shadow: 0 0 4px rgba(252, 254, 255, 0.5);
  transition: .2s linear;
}

/* Animation Apparition Joueurs */

.swashIn {
  -webkit-animation-name: swashIn;
          animation-name: swashIn;
}
@-webkit-keyframes swashIn {
  0% {
    opacity: 0;
    -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
    -webkit-transform: scale(0, 0);
            transform: scale(0, 0);
  }

  90% {
    opacity: 1;
    -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
    -webkit-transform: scale(0.9, 0.9);
            transform: scale(0.9, 0.9);
  }

  100% {
    opacity: 1;
    -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
    -webkit-transform: scale(1, 1);
            transform: scale(1, 1);
  }
}
@keyframes swashIn {
  0% {
    opacity: 0;
    -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
    -webkit-transform: scale(0, 0);
            transform: scale(0, 0);
  }

  90% {
    opacity: 1;
    -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
    -webkit-transform: scale(0.9, 0.9);
            transform: scale(0.9, 0.9);
  }

  100% {
    opacity: 1;
    -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
    -webkit-transform: scale(1, 1);
            transform: scale(1, 1);
  }
}
</style>