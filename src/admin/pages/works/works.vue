<template>
  <div class="works-page-comp page-component">
    <div class="page-content">
      <div class="container">
        <div class="header">
          <div class="title">
            Блок "Работы"
          </div>
        </div>
        <div class="form" v-if="formIsShown || Object.keys(this.currentWork).length !== 0">
          <app-form 
          @reset-handler="resetHandler"
          :form-title="formTitle"
          :edit-work-data="currentWork"
          />
        </div>
        <ul class="cards">
          <li class="item">
            <square-btn
            type="square"
            title="Добавить работу"
            @click="shownForm"
            />
          </li>
          <li :class="['item', {'edit-work': isCurrentWork(work)}]" v-for="work in works" :key="work.id">
            <work-card
              :work="work"
              @edit-work="editWork(work)"
            />
          </li>
        </ul>
      </div>
    </div> 
  </div>
</template>

<script>
import squareBtn from "../../components/button"
import appForm from '../../components/form';
import workCard from "../../components/workCard";

import { mapState, mapActions } from "vuex";

export default {
  components: {
    appForm,
    workCard,
    squareBtn
  },
  data() {
    return {
      currentWork: {},
      formIsShown: false,
      formTitle: "Добавление работы"
    }
  },
  computed: {
    ...mapState("works", {
      works: (state) => state.data,
    }),
  },
  methods: {
    ...mapActions({
      fetchWorks: "works/fetch",
    }),

    shownForm() {
      this.formIsShown = !this.formIsShown;
    },

    resetHandler() {
      this.formIsShown = false;
      this.currentWork = {};
      this.formTitle = "Добавление работы";
    },

    editWork(work) {
      this.formTitle = "Редактирование работы"
      this.currentWork = work;
    },

    isCurrentWork(work) {
      return work.id === this.currentWork.id;
    },
  },
  mounted() {
    this.fetchWorks();
  }
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

.form {
  margin-bottom: 30px;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  margin-left: -20px;
}

.item {
  width: calc(100% / 3 - 20px);
  margin-left: 20px;
}
</style>