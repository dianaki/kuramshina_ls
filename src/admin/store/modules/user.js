export default {
  namespaced: true,
  state: {
    user: null,
  },

  mutations: {
    SET_USER: (state, user) => {
      state.user = user;
    },
    CLEAR_USER: state => (state.user = {})
  },

  actions: {
    login({ commit }, user) {
      commit("SET_USER", user);
		
    },
    logout({ commit }) {
      localStorage.removeItem('token');
      location.reload();
    }
  },

  getters: {
    userIsLoggedIn: state => {
      const userObj = state.user;
      const userObjIsEmpty = Object.keys(userObj).length === 0 && userObj.constructor === Object
      return userObjIsEmpty === false;
    }
  },
};