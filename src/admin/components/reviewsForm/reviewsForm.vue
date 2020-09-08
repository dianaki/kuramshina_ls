<template>
  <div class="form-component">
    <form class="form" @submit.prevent="handleSubmit">
      <card :title='formTitle'>
        <div class="form-container" slot="content">
          <div class="form-cols">
            <div class="form-col">
              <label>
                <div
                  :style="{backgroundImage: `url(${preview})`}"
                  :class="[ 'uploader', {active: preview}, {hovered: hovered}]"
                  @dragover="handleDragOver"
                  @dragleave="hovered = false"
                  @drop="handleChange"
                >
                  <div class="uploader-user-icon" v-if="preview === ''"></div>
                </div>
                <div class="uploader-btn">
                  <app-button plain title="Добавить фото" v-model="newReview.photo" typeAttr="file" @change="handleChange"
                  :errorMessage="validation.firstError('newReview.photo')"
                  ></app-button>
                </div>
              </label>
            </div>
            <div class="form-col from-col-text">
              <div class="form-row">
                <app-input v-model="newReview.author" title="Имя автора" 
                :errorMessage="validation.firstError('newReview.author')"
                />
                <app-input v-model="newReview.occ" title="Титул автора" 
                :errorMessage="validation.firstError('newReview.occ')"
                />
              </div>
              <div class="form-row">
                <app-input v-model="newReview.text" field-type="textarea" title="Отзыв" 
                :errorMessage="validation.firstError('newReview.text')"
                />
              </div>
            </div>
          </div>
          <div class="form-btns">
            <div class="btn">
              <app-button title="Отмена" @click.prevent="$emit('reset-handler')" plain></app-button>
            </div>
            <div class="btn">
              <app-button title="Сохранить" typeAttr="submit"></app-button>
            </div>
          </div>
        </div>
      </card>
    </form>
  </div>
</template>

<script>
import card from "../Card";
import appButton from "../button";
import appInput from "../input";
import { mapActions } from "vuex";
import {Validator, mixin as ValidatorMixin} from "simple-vue-validator";

export default {
  mixins: [ValidatorMixin],
  validators: {
    "newReview.author"(value) {
      return Validator.value(value).required("Заполните поле");
    },
    "newReview.occ"(value) {
      return Validator.value(value).required("Заполните поле");
    },
    "newReview.text"(value) {
      return Validator.value(value).required("Заполните поле");
    },
    "newReview.photo"(value) {
      return Validator.value(value).required("Вставьте файл");
    }
  },
  components: { 
    card, 
    appButton, 
    appInput,
    Validator
  },
  props: {
    formTitle: String,
    currentReview: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      hovered: false,
      preview: "",
      newReview: {
        author: "",
        occ: "",
        text: "",
        photo: {},
      },
    };
  },
  watch: {
    currentReview() {
      if(Object.keys(this.currentReview).length) {
        this.newReview = {...this.currentReview};
        this.preview = `https://webdev-api.loftschool.com/${this.currentReview.photo}`
      }
    }
  },
  created() {
    if(Object.keys(this.currentReview).length) {
      this.newReview = {...this.currentReview};
      this.preview = `https://webdev-api.loftschool.com/${this.currentReview.photo}`
    }
  },
  methods: {
    ...mapActions({
      addNewReviewAction: "reviews/add",
      editReviewAction: "reviews/edit",

      showTooltip: "tooltips/show",
    }),

    handleDragOver(e) {
      e.preventDefault();
      this.hovered = true;
    },

    async handleSubmit() {
       if ((await this.$validate()) === false) return; // Проверка валидации
      this.$emit('reset-handler');
      if (this.newReview.id) {
        await this.editReviewAction(this.newReview);
        try {
          this.showTooltip({
            type: "success",
            text: "Отзыв изменен"
          })
        } catch (error) {
          this.showTooltip({
            type: "error",
            text: error.mesage
          })
        } 
      } else {
        await this.addNewReviewAction(this.newReview);
        try {
          this.showTooltip({
            type: "success",
            text: "Отзыв добавлен"
          })
        } catch (error) {
          this.showTooltip({
            type: "error",
            text: error.mesage
          })
        }
      }  
    },
    
    handleChange(event) {
      event.preventDefault();
      const file = event.dataTransfer 
        ? event.dataTransfer.files[0] 
        : event.target.files[0];
      this.newReview.photo = file;
      this.renderPhoto(file);
      this.hovered = false;
    },
    renderPhoto(file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        this.preview = reader.result;
      };
    },
  },
};
</script>

<style src="./reviewsForm.pcss" lang="postcss" scoped></style>