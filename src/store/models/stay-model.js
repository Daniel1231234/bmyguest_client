import { stayService } from "../../services/stay.service-toback.js";

export default {
  state: {
    stays: [],
    currStay: {},
    filterBy: {
      dest: "",
      price: {
        min: "",
        max: "",
      },
      dates: [],
      guests: 0,
    },
    labels: stayService.getLabels(),
    dates: [],
  },
  getters: {
    stays(state) {
      return state.stays;
    },
    getLebels(state) {
      return state.labels;
    },
    getCurrStay(state) {
      return state.currStay;
    },
    getCurrDate(state) {
      return state.currDate;
    },
  },
  mutations: {
    setStays(state, { stays }) {
      state.stays = stays;
    },
    setLabels(state, { labels }) {
      state.labels = labels;
    },
    setStayById(state, { stay }) {
      state.currStay = stay;
    },
    setFilterBy(state, { filterBy }) {
      state.filterBy = filterBy;
    },
    setCurrDate(state, { date }) {
      state.currDate = date;
    },
  },
  actions: {
    async loadStays({ commit }, { filterBy }) {
      commit({ type: "setFilterBy", filterBy });
      try {
        const stays = await stayService.query(filterBy);
        console.log(stays);
        commit({ type: "setStays", stays });
      } catch (err) {
        console.log("Error in query stays (store)", err);
        throw err;
      }
    },
    async loadById({ commit }, { id }) {
      try {
        const stay = await stayService.getById(id);
        commit({ type: "setStayById", stay });
      } catch (err) {
        console.log("Error in getById stays (store)", err);
        throw err;
      }
    },
    async saveStay({ commit }, { stay }) {
      try {
        const stayToSave = await stayService.save(stay);
        commit({ type: "setStays" });
        return stayToSave;
      } catch (err) {
        console.log("Error: cannot save stay", err);
        throw err;
      }
    },
    async getStaysByHost({ commit }, { id }) {
      const staysahostArrey = stayService.getHostStays(id);
      return staysahostArrey;
    },
  },
};
