<template>
  <div class="works-page-comp page-component">
    <div class="page-content">
      <div class="container">
        <div class="header">
          <div class="title">
            Блок "Работы"
          </div>
        </div>
        <div class="form">
          <app-form />
        </div>
        <ul class="cards">
          <li class="item" v-for="work in works" :key="work.id">
            <work-card
              :work="work"
            />
          </li>
        </ul>
      </div>
    </div> 
  </div>
</template>

<script>
import appForm from '../../components/form';
import workCard from "../../components/workCard";

import { mapState, mapActions } from "vuex";

export default {
  components: {
    appForm,
    workCard,
  },
  computed: {
    ...mapState("works", {
      works: (state) => state.data,
    }),
  },
  methods: {
    ...mapActions({
      fetchWorks: "works/fetch"
    }),
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