export default {
  namespaced: true,
  state: {
    data: [],
    user: {},
  },

  mutations: {
    ADD_WORK(state, newWork) {
      state.data.push(newWork);
    },
    REMOVE_WORK: (state, workId) => {
      state.data = state.data.filter(work => work.id !== workId)
    },
    SET_WORKS(state, works) {
      state.data = works
    },
  },
  actions: {
    async add({commit}, newWork) {
      const formData = new FormData();

      Object.keys(newWork).forEach(item => {
        formData.append(item, newWork[item]);
      })

      // for(let entry of formData.entries()) {
      //   console.log(entry);
      // }

      try {
        const {data} = await this.$axios.post('/works', formData);
        commit('ADD_WORK', data);
      } catch(error) {
        console.log('error');
      }
    },

    async remove({commit}, workId) {
      try {
        const { data } = await this.$axios.delete(`/works/${workId}`);
        commit("REMOVE_WORK", workId)
      } catch (error) {
        console.log("error");
      }
    },

    async fetch({commit, rootState}) {
      try {
        const userId = rootState.user.user.id
        const {data} = await this.$axios.get(`/works/${userId}`);
        commit('SET_WORKS', data);
      } catch (error) {
        console.log('error');
      }
    }
  },
  getters: {
    getUserId: state => {
      return state.user.id;
    }
  }
}