export default {
  namespaced: true,
  state: {
    data: [],
  },
  mutations: {
    SET_CATEGORIES: (state, categoties) => (state.data = categoties),
    ADD_CATEGORY: (state, category) => state.data.unshift(category),
    ADD_SKILL: (state, newSkill) => {
      state.data = state.data.map(category => {
        if (category.id === newSkill.category) {
          category.skills.push(newSkill);
        }
        return category;
      })
    },
    REMOVE_SKILL: (state, skillToRemove) => {
      state.data = state.data.map(category => {
        if (category.id === skillToRemove.category) {
          category.skills = category.skills.filter(skill => skill.id != skillToRemove.id)
        }
        return category;
      })
    }
  },
  actions: {
    async create({commit}, title) {
      try {
        const {data} = await this.$axios.post('/categories', {title});
        commit("ADD_CATEGORY", data);
      } catch (error) {
        throw new Error("Произошла ошибка");
      }
    },
    async fetch({commit}) {
      try {
        const {data} = await this.$axios.get('/categories/366');
        commit("SET_CATEGORIES", data)
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }   
  }
}