export default {
  namespaced: true,
  state: {
    data: [],
  },
  mutations: {
    SET_CATEGORIES: (state, categories) => (state.data = categories),
    ADD_CATEGORY: (state, category) => {
      category.skills = [];
      state.data.unshift(category)
    },
    REMOVE_CATEGORY: (state, categoryId) => {
      state.data = state.data.filter(
        category => category.id !== categoryId);
    },
    EDIT_CATEGORY: (state, editedCategory) => {
      state.data.forEach((category) => {
        if (category.id === editedCategory.id) {
          category.category = editedCategory.category
        }
      });
    },
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
    },
    EDIT_SKILL: (state, skillToEdit) => {
      const editSkillInCategory = category => {
        category.skills = category.skills.map(skill => {
          return skill.id === skillToEdit.id ? skillToEdit : skill
        });
      }

      const findCategory = category => {
        if (category.id === skillToEdit.category) {
          editSkillInCategory(category);
        }
        return category;
      }
      state.data = state.data.map(findCategory);
    },
  },

  actions: {
    async create({ commit }, title) {
      try {
        const { data } = await this.$axios.post('/categories', { title });
        commit("ADD_CATEGORY", data);
      } catch (error) {
        throw new Error("Произошла ошибка");
      }
    },
    async editCategory({ commit }, editedCategory) {
      try {
        const { data } = await this.$axios.post(`/categories/${editedCategory.id}`, { title: editedCategory.title });
        commit('EDIT_CATEGORY', data.category);
      } catch (error) {
        throw new Error("Произошла ошибка");
      }
    },
    async removeCategory({ commit }, categoryId) {
      try {
        const { data } = await this.$axios.delete(`/categories/${categoryId}`);
        commit("REMOVE_CATEGORY", categoryId);
        return response;
      } catch (error) {
        throw new Error("Произошла ошибка");
      }
    },
    async fetch({ commit, rootState }) {
      try {
        const v = await this.dispatch('user/fetch')
        const userId = rootState.user.user.id
        const { data } = await this.$axios.get(`/categories/${userId}`);
        commit("SET_CATEGORIES", data)
      } catch (error) {
        throw new Error("Произошла ошибка");
      }
    },
  },
};
