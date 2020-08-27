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
              @remove="emptyCategoryShow = false"
              empty 
            />
          </li>
          <li 
            class="item"
            v-for="category in categories"
            :key="category.id"
          >
            <category 
              :title="category.category"
              :skills="category.skills"
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

export default {
  name: 'about',
  components: {
    iconedButton: button,
    category,
  },
  data() {
    return {
      categories: [],
      emptyCategoryShow: false
    }
  },
  created() {
   this.categories = require("../../data/categories.json");
  }
}
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