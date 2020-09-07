<template>
  <div class="reviews-page-comp page-component">
    <div class="page-content">
      <div class="container">
        <div class="header">
          <div class="title">
            Блок "Отзывы"
          </div>
        </div>
      </div>
    </div> 
  </div>
</template>

<script>
import squareBtn from "../../components/button";

import { mapState, mapActions } from "vuex";

export default {
  
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

</style>