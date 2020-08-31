export default {
  namespaced: true,
  state: {
    user: null,
  },
  mutations: {
    SET_USER: (state, user) => {
      state.user = user;
    },
  },
  actions: {
    async fetch(context) {
      try {
        const {
          data: { user },
        } = await this.$axios.get('/user');

        console.log("user fetch invoked");
        context.commit("SET_USER", user);
      } catch (error) {
        console.log(error);
      }
    },
  },
  getters: {},
};