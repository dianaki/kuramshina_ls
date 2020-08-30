<template>
  <div class="about-page-comp">
    <div class="page-content">
      <div class="container">
        <div class="header">
          <div class="title">Блок "Обо мне"</div>
          <iconed-button 
            type="iconed" 
            v-if="emptyCategoryShow === false"
            @click="emptyCategoryShow = true" 
            title="Добавить группу" />
        </div>
        <ul class="skills">
          <li class="item" v-if="emptyCategoryShow">
            <category 
              @remove-category="emptyCategoryShow = false"
              @approve="createCategory"
              empty 
            />
          </li>
          <li 
            class="item"
            v-for="category in categories"
            :key="category.id">
            <category 
              :title="category.category"
              :skills="category.skills"
              @create-skill="createSkill($event, category.id)"
              @edit-skill="editSkill"
              @remove-skill="removeSkill"
              @approve="editCategory($event, category.id)"
              @remove-category="removeCategory($event, category.id)"
            />
          </li>
        </ul>
      </div>
    </div> 
  </div>
  
</template>

<script>


import button from "../../components/button";
import category from "../../components/category";
import { mapActions, mapState } from "vuex";

export default {
  components: {
    iconedButton: button,
    category,
  },
  data() {
    return {
      emptyCategoryShow: false,
    };
  },
  computed: {
    ...mapState("categories", {
      categories: (state) => state.data
    })
  },
  methods: {
    ...mapActions({
      createCategoryAction: "categories/create",
      fetchCategoriesAction: "categories/fetch",
      removeCategoryAction: "categories/removeCategory",
      editCategoryAction: "categories/editCategory",

      addSkillAction: "skills/add",
      removeSkillAction: "skills/remove",
      editSkillAction: "skills/edit",

      showTooltip: "tooltips/show",
    }),

    async createSkill(skill, categoryId) {
      try{
        const newSkill = {
        ...skill,
        category: categoryId,
      };
      await this.addSkillAction(newSkill);
      skill.title = "";
      skill.percent = "";
      this.showTooltip({
        text: "Навык добавлен",
        type: "success"
      })
      } catch (error) {
        this.showTooltip({
          text: error.mesage,
          type: "error",
        })
      }
    },

    removeCategory(event, categoryId) {
      try {
        this.removeCategoryAction(categoryId);
        this.showTooltip({
          type: "success",
          text: "Категория удалена"
        })
      } catch (error) {
        this.showTooltip({
          text: error.message,
          type: "error"
        })
      }
      
    },

    async editCategory(category) {
      try {
        await this.editCategoryAction(category);
        this.showTooltip({
          type: "success",
          text: "Категория изменена"
        })
      } catch (error) {
        this.showTooltip({
          type: "error",
          text: error.message
        })
      }
    },
    removeSkill(skill) {
      try {
        this.removeSkillAction(skill);
        this.showTooltip({
          type: "success",
          text: "Навык удален"
        })
      } catch (error) {
        this.showTooltip({
          type: "error",
          text: error.mesage
        })
      }
    },

    async editSkill (skill) {
      try {
        await this.editSkillAction(skill);
        skill.editmode = false;
        this.showTooltip({
          type: "success",
          text: "Навык изменен"
        })
      } catch (error) {
        this.showTooltip({
          type: "error",
          text: error.message
        })
      }
     
    },
  
    async createCategory(categoryTitle) {
      try {
        await this.createCategoryAction(categoryTitle);
        this.emptyCategoryShow = false;
        this.showTooltip({
          type: "success",
          text: "Категория создана"
        })
      } catch (error) {
        this.showTooltip({
          type: "error",
          text: error.message
        })
      }
    },
  },
  created() {
    this.fetchCategoriesAction();
  },
};
</script>

<style lang="postcss" scoped>

.page-content {
  padding: 50px 0 15px;
  flex: 1;
  background: url("../../../images/bg/admin.jpg") center center / cover no-repeat;
}

.header {
  display: flex;
  margin-bottom: 60px;
}

.title {
  font-size: 21px;
  font-weight: bold;
  color: #414C63;
  margin-right: 54px;
}

.skills {
  display: flex;
  flex-wrap: wrap;
}

.item {
  width: calc(100% / 2 - 24px);
  margin-right: 24px;
}
</style>