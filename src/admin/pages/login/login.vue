<template>
  <div class="login-page-component">
    <div class="content">
      <div class="form">
        <div class="form-title">Авторизация</div>
        <div class="form__btn-close">
          <button class="btn-close">
            <svg class="btn-close__icon">
              <use xlink:href="sprite.svg#remove"></use>
            </svg>
          </button>
        </div>
        <div class="row">
          <app-input title="Логин" icon="user" />
        </div>
        <div class="row">
          <app-input title="Пароль" icon="key" type="password" />
        </div>
        <div class="btn">
           <appButton title="Отправить" @click="onClick" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import appInput from "../../components/input";
import appButton from "../../components/button";

export default {
  components: { 
    appInput,
    appButton,
  },
};
</script>

<style lang="postcss" scoped>
.login-page-component {
  background: url("../../../images/bg/hero.jpg") top / cover no-repeat;
}
.content {
  min-height: 100vh;
   display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  flex-direction: column;
  background: rgba(45, 60, 78, 0.9);;
}
.form {
  width: 565px;
  padding: 47px 75px 72px;
  background: #ffffff;
  position: relative;
}
.form-title {
  font-weight: 600;
  font-size: 36px;
  line-height: 49px;
  color: #43436B;
  text-align: center;
  margin-bottom: 25px;
}
.btn-close {
  position: absolute;
  top: 30px;
  right: 30px;
  background: none;
  fill: #414C63;
  width: 20px;
  height: 20px;
  padding: 0;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.3;
  }
  &__icon {
    fill: #2d3c4e;
    width: 100%;
    height: 100%;
  }
}
.row {
  margin-bottom: 40px;
}
.btn {
  text-align: center;
}
</style>