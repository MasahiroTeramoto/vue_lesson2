import Vue from 'vue';
import Vuex from 'vuex';
import birthday from './modules/birthday';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    myGender: String,
    myYear: String,
    myMonth: String,
    myDay: String,
    myJoinStatus: String,
    myWarnStatus: String,
    myPastStatus: String,
    myConsultationContent: ''
  },
  getters: {
    myGender: state => state.myGender,
    myYear: state => state.myYear,
    myMonth: state => state.myMonth,
    myDay: state => state.myDay,
    myJoinStatus: state => state.myJoinStatus,
    myWarnStatus: state => state.myWarnStatus,
    myPastStatus: state => state.myPastStatus,
    myConsultationContent: state => state.myConsultationContent
  },
  mutations: {
    changeMyGender(state, gender) {
      state.myGender = gender;
    },
    changeMyYear(state, year) {
      state.myYear = year;
    },
    changeMyMonth(state, month) {
      state.myMonth = month;
    },
    changeMyDay(state, day) {
      state.myDay = day;
    },
    changeMyJoinStatus(state, joinStatus) {
      state.myJoinStatus = joinStatus;
    },
    changeMyWarnStatus(state, warnStatus) {
      state.myWarnStatus = warnStatus;
    },
    changeMyPastStatus(state, pastStatus) {
      state.myPastStatus = pastStatus;
    },
    changeMyConsultationContent(state, content) {
      state.myConsultationContent = content;
    }
  },
  actions: {
    changeMyGender({ commit }, gender) {
      commit('changeMyGender', gender);
    },
    changeMyYear({ commit }, year) {
      commit('changeMyYear', year);
    },
    changeMyMonth({ commit }, month) {
      commit('changeMyMonth', month);
    },
    changeMyDay({ commit }, day) {
      commit('changeMyDay', day);
    },
    changeMyJoinStatus({ commit }, joinStatus) {
      commit('changeMyJoinStatus', joinStatus);
    },
    changeMyWarnStatus({ commit }, warnStatus) {
      commit('changeMyWarnStatus', warnStatus);
    },
    changeMyPastStatus({ commit }, pastStatus) {
      commit('changeMyPastStatus', pastStatus);
    },
    changeMyConsultationContent({ commit }, content) {
      commit('changeMyConsultationContent', content);
    }
  },
  modules: {
    birthday
  }
});
