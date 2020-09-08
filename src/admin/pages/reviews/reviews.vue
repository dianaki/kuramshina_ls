<template>
  <div class="reviews-page-comp page-component">
    <div class="page-content">
      <div class="container">
        <div class="header">
          <div class="title">
            Блок "Отзывы"
          </div>
        </div>
        <div class="form" v-if="formIsShown || Object.keys(this.currentReview).length !== 0">
          <app-form 
          @reset-handler="resetHandler"
          :currentReview="currentReview"
          :form-title="formTitle"
          :edit-review-data="currentReview"
          />
        </div>
        <ul class="cards">
          <li class="item">
            <square-btn
            type="square"
            title="Добавить отзыв"
            @click="shownForm"
            />
          </li>
          <li :class="['item', {'edit-review': isCurrentReview(review)}]" v-for="review in reviews" :key="review.id">
            <review-card
              :review="review"
              @edit-review="editReview(review)"
            />
          </li>
        </ul>
      </div>
    </div> 
  </div>
</template>

<script>
import squareBtn from "../../components/button"
import appForm from '../../components/reviewsForm';
import reviewCard from "../../components/reviewCard";

import { mapState, mapActions } from "vuex";

export default {
  components: {
    appForm,
    reviewCard,
    squareBtn
  },
  data() {
    return {
      currentReview: {},
      formIsShown: false,
      formTitle: "Новый отзыв"
    }
  },
  computed: {
    ...mapState("reviews", {
      reviews: (state) => state.data,
    }),
  },
  methods: {
    ...mapActions({
      fetchReviews: "reviews/fetch",
    }),

    shownForm() {
      this.formIsShown = !this.formIsShown;
    },

    resetHandler() {
      this.formIsShown = false;
      this.currentReview = {};
      this.formTitle = "Новый отзыв";
    },

    editReview(review) {
      this.formTitle = "Редактирование отзыва"
      this.currentReview = review;
    },

    isCurrentReview(review) {
      return review.id === this.currentReview.id;
    },
  },
  mounted() {
    this.fetchReviews();
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

.cards {
  display: flex;
  flex-wrap: wrap;
  margin-left: -20px;
  align-items: stretch;
}

.item {
  width: calc(100% / 3 - 28px);
  min-height: 385px;
  margin: 0 0 28px 28px;
}

.edit-review {
  position: relative;

  &::before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, .6);
    z-index: 5;
  }
}

.form {
  margin-bottom: 30px;
}

.form-enter-active, .form-leave-active {
  transition: max-height .5s ease-out;
  overflow: hidden;
  box-shadow: 0.25625rem 0.18125rem 1.25rem 0 rgba(0,0,0,.07);
}

.form-enter, .form-leave-to {
  max-height: 0px;
}

.form-enter-to, .form-leave {
  max-height: 700px;
}
</style>