<template>
  <div class="">
    <div 
      @submit.prevent="someAction"
      :class="['skill-add-line-component', {blocked: blocked}]"
      >
      <div class="add-title">
        <app-input 
        v-model="skill"
        placeholder="Новый навык" 
        :errorMessage="validation.firstError('this.skill')"
        />
      </div>
      <div class="add-percent">
        <app-input 
        v-model="percent"
        type="number" min="0" max="100" maxlength="3" 
        :errorMessage="validation.firstError('this.percent')"
        />
      </div>
      <div class="add-button">
        <round-button 
        type="round" />
      </div>
    </div> 
  </div>
</template>

<script>
import input from "../input";
import button from "../button";
import {Validator, mixin as ValidatorMixin} from "simple-vue-validator";

export default {
  props: {
    blocked: Boolean
  },
  components: {
    appInput: input,
    roundButton: button,
  },
  validators: {
    "this.skill": value => {
      return Validator.value(value).required("Введите навык");
    },
    "this.percent": value => {
      return Validator.value(value).required("Введите уровень навыка")
    }
  },
  data:() => ({
    skill: null,
    percent: null,
  }),
  methods: {
    someAction() {
      this.$validate().then ((isValid) => {
        if (isValid === false)
        return;
      });
    },
  },
};
</script>

<style lang="postcss" src="./skillAddLine.pcss">
</style>

<style lang="postcss" scoped>


</style>