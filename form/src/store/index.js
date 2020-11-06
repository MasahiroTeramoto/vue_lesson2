import Vue from 'vue';
import Vuex from 'vuex';
import birthday from './modules/birthday';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    myGender: '',
    myYear: '1993',
    myMonth: '1',
    myDay: '1',
    myJoinStatus: '',
    myWarnStatus: '',
    myPastStatus: '',
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
  modules: {
    birthday
  }
});
