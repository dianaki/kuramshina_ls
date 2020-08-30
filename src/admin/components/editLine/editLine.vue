<template>
  <div class="edit-line-component" :class="{'blocked' : blocked}">
    <div class="title" v-if="editmode === false">
      <div class="text">{{value}}</div>
      <div class="icon">
        <icon symbol="pencil" grayscale @click="editmode = true"></icon>
      </div>
    </div>
    <div v-else class="title">
      <div class="input">
        <app-input
          v-model="categoryTitle"
          placeholder="Название новой группы"
          :value="value"
          :errorText="errorText"
          @input="$emit('input', $event)"
          @keydown.native.enter="onApprove"
          autofocus="autofocus"
          no-side-paddings="no-side-paddings"
          :errorMessage="validation.firstError('categoryTitle')"
        ></app-input>
      </div>
      <div class="buttons">
        <div class="button-icon">
          <icon symbol="tick" @click="onApprove"></icon>
        </div>
        <div class="button-icon">
          <icon symbol="cross" @click="$emit('remove', $event)"></icon>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";
import {Validator, mixin as ValidatorMixin} from "simple-vue-validator";

export default {
  mixins: [ValidatorMixin],
  validators: {
    "categoryTitle"(value) {
      return Validator.value(value).required('Обязательно для заполнения')
    }
  },
  props: {
    value: {
      type: String,
      default: ""
    },
    errorText: {
      type: String,
      default: ""
    },
    editModeByDefault: Boolean,
    blocked: Boolean
  },
  data() {
    return {
      editmode: this.editModeByDefault,
      title: this.value,
      categoryTitle: ""
    };
  },
  methods: {
    onApprove() {
      this.$validate().then(seccess => {
        if (!seccess) return;
        if (this.title.trim() === this.value.trim()) {
          this.editmode = false;
        } else {
          this.$emit("approve", this.value);
          this.editmode = false;
        }
      })
    },
  },
  components: {
    icon: () => import("components/icon"),
    appInput: () => import("components/input")
  }
};
</script>

<style lang="postcss" scoped src="./editLine.pcss"></style>