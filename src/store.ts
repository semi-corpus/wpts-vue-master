import Vue from 'vue';
import Vuex from 'vuex';
import {Team} from '@/model/Team';
import {Tournament} from '@/model/Tournament';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    nextId: 0,
    teams: new Array<Team>(),
    tournament: new Tournament([]),
  },
  mutations: {
    addTeam: (state, teamName: string): void => {
      const team = new Team();
      team.id = state.nextId;
      team.name = teamName;
      state.teams.push(team);
      state.nextId++;
    },
    remove: (state, index: number): void => {
      state.teams.splice(index, 1);
    },
    draw: (state): void => {
      state.tournament = new Tournament(state.teams);
    },
  },
  actions: {

  },
});
