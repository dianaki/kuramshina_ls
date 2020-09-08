<template>
  <div 
    :class="['skill-add-line-component', {blocked: blocked}]"
    >
    <div class="add-title">
      <app-input 
      v-model="skill.title"
      placeholder="Новый навык" 
      :errorMessage="validation.firstError('skill.title')"
      />
    </div>
    <div class="add-percent">
      <app-input 
      v-model="skill.percent"
      type="number" min="0" max="100" maxlength="3" 
      :errorMessage="validation.firstError('skill.percent')"
      />
    </div>
    <div class="add-button">
      <round-button 
      type="round" 
      @click="handleClick()"
      />
    </div>
  </div>
</template>

<script>
import input from "../input";
import button from "../button";
import {Validator, mixin as ValidatorMixin} from "simple-vue-validator";

export default {
  mixins: [ValidatorMixin],
  validators: { 
    "skill.title": value => {
      return Validator.value(value).required("Заполните поле");

    },
    "skill.percent": value => {
      return Validator.value(value)
      .required("Заполните поле")
      .integer("Должно быть числом")
      .between(0, 100, "Некорректное число")
    }
  },
  props: {
    blocked: Boolean
  },
  components: {
    appInput: input,
    roundButton: button,
  },
  data() {
    return {
      skill: {
        title: "",
        percent: "",
      }
    }
  },
  methods: {
    async handleClick() {
      if (await this.$validate() === false) return;
      this.$emit('approve', this.skill);
    },
  },
};
</script>

<style lang="postcss" src="./skillAddLine.pcss">
</style>