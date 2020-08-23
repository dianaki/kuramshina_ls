<template>
  <div class="">
    <div 
      @submit.prevent="someAction()"
      :class="['skill-add-line-component', {blocked: blocked}]"
      >
      <div class="add-title">
        <app-input 
        v-model="skill"
        placeholder="Новый навык" 
        />
      </div>
      <div class="add-percent">
        <app-input 
        v-model="percent"
        type="number" min="0" max="100" maxlength="3" />
      </div>
      <div class="add-button">
        <round-button 
        :disabled="!isSkillValid"
        type="round" />
      </div>
    </div> 
    <div 
    v-if="isSkillError"
    class="text-error">Не все поля формы заполнены</div>
  </div>
</template>

<script>
import input from "../input";
import button from "../button";

export default {
  props: {
    blocked: Boolean
  },
  components: {
    appInput: input,
    roundButton: button,
  },
  data() {
    return {
      skill: null,
      percent: null,
    };
  },
  computed: {
    isSkillValid() {
      return this.skill && this.percent;
    },
    isSkillError() {
      return !this.isSkillValid
    },
  },
};
</script>

<style lang="postcss" src="./skillAddLine.pcss">
</style>

<style lang="postcss" scoped>

.text-error {
  text-align: center;
  color:red;
}

</style>